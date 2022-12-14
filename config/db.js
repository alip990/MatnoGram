const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log("---------------+", process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo DB Connection :${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
