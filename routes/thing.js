const controller = require("../controller/thing.js");

const routes = {
  index: (async (server) => {
    return await server.route({
      method: 'GET',
      path: '/',
      options: {
        auth: false
      },
      handler: async (req, head) => {
        return await controller.index();
      }
    });
  }),
  all: (async (server) => {
    return await server.route({
      method: 'GET',
      path: '/api/things',
      options: {
        auth: false
      },
      handler: async (req, head) => {
        return await controller.all();
      }
    });
  }),
  get: (async (server) => {
    return await server.route({
      method: 'GET',
      path: '/api/things/{id}',
      handler: async (req, head) => {
        return await controller.get(null);
      }
    });
  }),
  post: (async (server) => {
    return await server.route({
      method: 'POST',
      path: '/api/things',
      options: {
        auth: false
      },
      handler: async (req, head) => {
        return await controller.post(null);
      }
    });
  }),
  put: (async (server) => {
    return await server.route({
      method: 'PUT',
      path: '/api/things/{id}',
      options: {
        auth: false
      },
      handler: async (req, head) => {
        return await controller.put(null);
      }
    });
  }),
  delete: (async (server) => {
    return await server.route({
      method: 'DELETE',
      path: '/api/things/{id}',
      options: {
        auth: false
      },
      handler: async (req, head) => {
        return await controller.delete(null);
      }
    });
  })
}

module.exports = routes;