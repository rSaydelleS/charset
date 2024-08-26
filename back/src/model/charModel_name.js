const mongoose = require("mongoose");
const { Schema } = mongoose;

const charSchema = new Schema(
  {
    charName: {
      type: String,
      required: true,
    },
    charClass: {
      type: String,
      required: true,
    },
    charlvl: {
      type: String,
      required: true,
    },
    charPass: {
      type: String,
      required: true,
    },
    charRace: {
      type: String,
      required: true,
    },
    charAlignment: {
      type: String,
      require: true,
    },
    charXp: {
      type: String,
    },
  },
  { timestamps: true }
);

const charModel_Name = mongoose.model("charName", charSchema);
module.exports = charModel_Name;
