import mongoose from "mongoose";

const connectDB = async (dbUrl: string): Promise<void> => {
  try {
    const db = await mongoose.connect(dbUrl);
    console.log(`MongoDB -тэй холбогдлоо ${db.connection.host}`);
  } catch (err) {
    console.log("MongoDB -тэй холбогдkh үед алдаа гарлаа: ", err);
  }
};

export default connectDB;
