const fs = require('fs');
const Task = require('../models/Task.js');
const Boom = require('boom');

function _throw(error) {
  throw error;
}

module.exports = {
  index(req, head) {
    try {
      return ("Hello");
    } catch (err) {
      Boom.badImplementation(err);
      return ("Bad Implementation", err);
    }
  },
  async create(req, head) {
    try {
      const params = req.payload;
      console.log(params)
      const task = await new Task({
        title: params.title,
        description: params.description,
        flag: params.flag,
        date: params.date,
        time: params.time,
        importance: params.importance,
        check: false,
        created_at: new Date()
      });

      const result = await task.save();
      return {message: "Created successfully"};

    } catch(err) {
      Boom.badImplementation(err);
      return ("Bad Implementation", err);
    }
  },
  async find(req, head) {
    try {
      return await Task.find({}).sort({createdAt: 'desc'});
    } catch (err) {
      Boom.badImplementation(err);
      return ("Bad Implementation", err);

    }
  },
  async findOne(req, head) {
    try {
      return await Task.findOne({
        _id: req.params.id
      });
    } catch (err) {
      Boom.badImplementation(err);
      return ("Bad Implementation", err);
    }
  },
  async update(req, head) {
    try {
      let result = await Task.updateOne({
        _id: req.params.id
      }, {
        $set: req.payload
      });
      return {message: "Update successfully", result};
    } catch (err) {
      Boom.badImplementation(err);
      return ("Bad Implementation", err);
    }
  },
  async delete(req, head) {
    try {
      let result = await Task.findById(req.params.id).remove();
      return {success: true, message: 'Successfully removed!', result};
    } catch (err) {
      Boom.badImplementation(err);
      return ("Bad Implementation", err);
    }
  }
}
