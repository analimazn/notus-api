const controller = require("../controller/thing.js");

const routes = function (server) {
  return {
    index: server.route({
      method: 'GET',
      path: '/',
      handler: controller().index
    }),
    all: server.route({
      method: 'GET',
      path: '/api/things',
      handler: controller().all
    }),
    get: server.route({
      method: 'GET',
      path: '/api/things/{id}',
      handler: controller().get
    }),
    post: server.route({
      method: 'POST',
      path: '/api/things',
      handler: controller().create
    }),
    put: server.route({
      method: 'PUT',
      path: '/api/things/{id}',
      handler: controller().update
    }),
    delete: server.route({
      method: 'DELETE',
      path: '/api/things/{id}',
      handler: controller().remove
    })
  }
}

module.exports = routes;