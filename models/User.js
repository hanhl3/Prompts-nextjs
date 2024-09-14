import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    unique: true,
    lowercase: true,
  },
  image: String,
});

const User = mongoose.model("User", userSchema);

export default User;
