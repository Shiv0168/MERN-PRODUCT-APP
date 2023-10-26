// const mongoose = require("mongoose");

// const productSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       unique: [true, "unique name required !!!"],
//       required: [true, "name required !!!"],
//     },
//     description: {
//       type: String,
//       unique: [true, "unique description required !!!"],
//       required: [true, "description required !!!"],
//     },
//     price: {
//       type: Number,
//       required: [true, "price required !!!"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("product", productSchema);

const mongoose =require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "name required !!!"],
    unique: [true, "unique name required !!!"],
  },
  description: {
    type: String,
    required: [true, "description required !!!"],
    unique: [true, "unique description required !!!"],
  },
  price: {
    type: Number,
    required: [true, "price required !!!"],
  },
});

exports.Product = mongoose.model("Product", productSchema);
