const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    staus: { type: Boolean, required: true },
    category: { type: String, required: true },
  },
  { versionKey: false }
);

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = {
  TodoModel,
};
