import { model, Schema } from "mongoose";

const newSchema = new Schema(
  {
    // _id: Se agrega de forma automatica
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number,
    },
  },
  {
    //motodos de instancia
    //NO hacerlas con =>
    methods: {
      Something() {
        return 123;
      },
    },
  }
);

module.exports = model("ModelName", newSchema);
