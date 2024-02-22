const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewScheme = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const menuSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    menuKey: {
      type: String,
      required: true,
    },
    image: [String],
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    recipes: [String],
    reviews: [reviewScheme],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numberReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
