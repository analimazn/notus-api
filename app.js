const mongoose = require("mongoose");
const Hapi = require("hapi");
const routes = require("./routes/thing.js");
require('dotenv').config();

async function api() {
  try {
    const db = mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true
    });

    const server = new Hapi.Server({
      port: 5000,
      host: 'localhost'
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

    await routes.index(server);
    await routes.all(server);
    await routes.get(server);
    await routes.post(server);
    await routes.put(server);
    await routes.delete(server);
    return server;

  } catch(err) {
    return ("Error on server.", err);
  }
}

api()
  .then((server) => console.log("Server listening on port"))
  .catch((err) => {
      console.error(err);
      process.exit(1);
  });
