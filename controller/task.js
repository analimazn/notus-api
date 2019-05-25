const Task = require('../models/Task.js')
const Boom = require('boom')
const moment = require('moment')

function _throw(error) {
  throw error
}

module.exports = {
  index(req, head) {
    try {
      return ("Hello")
    } catch (err) {
      Boom.badImplementation(err)
      return ("Bad Implementation", err)
    }
  },
  async create(req, head) {
    try {
      const params = req.payload
      const date = moment.utc(params.date + ' ' + params.time, "DD/MM/YYYY HH:mm")
      const paramsImportance = String(params.importance).toLowerCase()
      var importance = 0

      if (paramsImportance == 'low') {
        importance = 3
      } else if (paramsImportance == 'medium') {
        importance = 2
      } else if (paramsImportance == 'high') {
        importance = 1
      }

      const task = await new Task({
        title: params.title,
        description: params.description,
        flag: params.flag,
        date: date,
        importance: importance,
        check: false,
        created_at: new Date()
      })

      console.log(task)
      const result = await task.save()
      return {message: "Created successfully"}

    } catch(err) {
      Boom.badImplementation(err)
      return ("Bad Implementation", err)
    }
  },
  async find(req, head) {
    try {
      return await Task.find({}).sort({date: 'asc', importance: 'asc'})
    } catch (err) {
      Boom.badImplementation(err)
      return ("Bad Implementation", err)

    }
  },
  async findOne(req, head) {
    try {
      return await Task.findOne({
        _id: req.params.id
      })
    } catch (err) {
      Boom.badImplementation(err)
      return ("Bad Implementation", err)
    }
  },
  async update(req, head) {
    try {
      let result = await Task.updateOne({
        _id: req.params.id
      }, {
        $set: JSON.parse(req.payload)
      })
      return {message: "Update successfully", result}
    } catch (err) {
      Boom.badImplementation(err)
      return ("Bad Implementation", err)
    }
  },
  async delete(req, head) {
    try {
      let result = await Task.findById(req.params.id).deleteOne()
      return {success: true, message: 'Successfully removed!', result}
    } catch (err) {
      Boom.badImplementation(err)
      return ("Bad Implementation", err)
    }
  }
}
