const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });
    console.log("MongoDB is Connected......");
  } catch (err) {
    console.error("err", err.message);
    // exit and break the app
    process.exit(1);
  }
};

module.exports = connectDB;
