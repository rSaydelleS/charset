import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    nome: {
      type: "string",
      trquired: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    senha: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;