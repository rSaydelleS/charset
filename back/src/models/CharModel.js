import mongoose from "mongoose";

const CharSchema = new mongoose.Schema({
  nome: {
    type: "string",
    required: true,
  },
  classe: {
    type: "string",
    lowercase: true,
    required: true,
  },
  nivel: {
    type: "string",
    required: true,
    trim: true,
  },
  especie: {
    type: "string",
    required: true,
    trim: true,
  },
});

const CharModel = mongoose.model("chars", CharSchema);
export default CharModel;
