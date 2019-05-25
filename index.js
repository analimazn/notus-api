const mongoose = require("mongoose")
const Hapi = require("hapi")
const taskRoutes = require("./routes/task.js")
require('dotenv').config()

async function api() {
  try {
    const db = mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true
    })

    mongoose.connection.on('connected', () => {
      console.log("Connected to MongoDB")
    })

    mongoose.connection.on('error', (err) => {
      console.log("Error while connecting to MongoDB", err)
    })

    const server = new Hapi.Server({
      port: 5050,
      host: '0.0.0.0'
    })

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)

    server.route(taskRoutes)


  } catch(err) {
    return ("Error on server.", err)
    process.exit(1)
  }
}

api()
