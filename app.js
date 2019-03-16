const mongoose = require("mongoose");
const Hapi = require("hapi");
const { routes } = require("./routes/thing.js");
require('dotenv').config();

async function api() {
  try {
    const db = mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true
    });

    const server = new Hapi.Server({
      port: 5050,
      host: 'localhost'
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    
    await routes(server).index;
    await routes(server).all;
    await routes(server).get;
    await routes(server).post;
    await routes(server).put;
    await routes(server).delete;
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

