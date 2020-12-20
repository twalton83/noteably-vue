const mongoose = require("mongoose");
const { DateTime } = require("luxon");
const { Schema } = mongoose;

const noteSchema = new Schema({
  body: { type: String, required: true },
  title: { type: String, required: true },
  author: {type : Schema.Types.ObjectId, ref :'User'},
  date_posted : {type : Date, default : Date.now}

});

noteSchema.virtual("url").get(function () {
  return `/note/${this._id}`;
});

noteSchema.virtual("time").get(function () {
  return DateTime.fromJSDate(this.date_posted).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model("Note", noteSchema);
