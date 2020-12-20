const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username : { type: String, required: true },
  password: { type: String, required: true },
  notes : {type : [NoteSchema], default: []}
});

module.exports = mongoose.model("User", userSchema);
