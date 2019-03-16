const fs = require('fs');
const { Thing } = require('../models/Thing.js');
const Boom = require('boom');

const controller = {
  index: (async () => {
    try {
      return ("Hello world");

    } catch (err) {
      Boom.badImplementation(err);
    }
  }),
  all: (async () => {
    try {
      return await Thing.find({}).sort({createdAt: 'desc'});

    } catch (err) { 
      Boom.badImplementation(err);
    }
  }),
  get: (async (params) => {
    try {
      const thing = req.params.thing;

      return await Thing.findOne({
        _id: thing.id
      });

    } catch (err) {
      Boom.badImplementation(err);
    }
  }),
  create: (async (params) => {
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
  update: (async (params) => {
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
  remove: (async (params) => {
    try {
      await Thing.findById(req.params.thing).remove();

      return {success: true, message: 'Successfully removed!'};

    } catch (err) {
      Boom.badImplementation(err);
    }
  }) 
}

module.exports = controller;