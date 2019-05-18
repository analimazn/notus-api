const controller = require("../controller/task.js");

module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: controller.index
  },
  {
    path: '/api/tasks',
    method: 'POST',
    handler: controller.create
  },
  {
    path: '/api/tasks',
    method: 'GET',
    handler: controller.find
  },
  {
    path: '/api/tasks/{id}',
    method: 'GET',
    handler: controller.findOne
  },
  {
    path: '/api/tasks/{id}',
    method: 'POST',
    handler: controller.update
  },
  {
    path: '/api/tasks/{id}',
    method: 'DELETE',
    handler: controller.delete
  }
]
