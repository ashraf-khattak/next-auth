import mongoose from "mongoose";

const userSchema = new Schema({
  userName: {
    type: "string",
    required: [true, "Please enter a User name"],
    unique: true,
  },
  email: {
    type: "string",
    required: [true, "Please enter an email"],
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "Please enter an password"],
  },
  isVerified: {
    type: "boolean",
    default: false,
  },
  isAdmin: {
    type: "boolean",
    default: false,
  },
  forgotPasswordToken: string,
  forgotPasswordTokenExpiry: Date,
  verifyToken: "string",
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
