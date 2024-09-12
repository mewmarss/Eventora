import mongoose from "mongoose";

const connectToDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
