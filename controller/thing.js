const fs = require('fs');
const { Thing } = require('../models/Thing.js');
const Boom = require('boom');

const controller = (() => {
  return {
    index: (async (req, head) => {
      try {
        return head("Hello world");

      } catch (err) {
        console.log(err)
        Boom.badImplementation(err);
      }
    }),
    all: (async (req, head) => {
      try {
        return await Thing.find({}).sort({createdAt: 'desc'});

      } catch (err) {
        Boom.badImplementation(err);
      }
    }),
    get: (async (req, head) => {
      try {
        const thing = req.params.thing;

        return await Thing.findOne({
          _id: thing.id
        });

      } catch (err) {
        Boom.badImplementation(err);
      }
    }),
    create: (async (req, head) => {
      try {
        const thing = await new Thing({
          title: req.payload.title,
          description: req.payload.description,
          img: {
            data: req.payload.img.data, 
            contentType: 'image/png'
          },
          emotional_value: {
            low: req.payload.emotional_value.low,
            medium: req.payload.emotional_value.medium,
            high: req.payload.emotional_value.high
          },
          check: false,
          created_at: new Date()
        });
        await thing.save();
        return {message: "Created successfully", thing};
      
      } catch (err) {
        Boom.badImplementation(err);
      }
    }),
    update: (async (req, head) => {
      try {
        const thing = req.params.thing;
        const updates = req.payload;
        
        return await Thing.update({
          _id: req.params.id
        }, {
          $set: req.payload
        });

      } catch (err) {
        Boom.badImplementation(err);
      }
    }),
    remove: (async (req, head) => {
      try {
        await Thing.findById(req.params.thing).remove();

        return {success: true, message: 'Successfully removed!'};

      } catch (err) {
        Boom.badImplementation(err);
      }
    }) 
  }
});

module.exports = controller;