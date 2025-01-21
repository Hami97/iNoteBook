const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = async () => {
   try {
    await mongoose.connect(mongoURI, { });
        console.log("Connected.");
   } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process on failure
  }
};
module.exports = connectToMongo;