import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // optional but recommended
    },
  },
  { timestamps: true } // plural and correct
);

export default mongoose.model("User", userSchema);
