const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
 
    cus_name: {
      type: String,
      required: [true, "please enter cus_name"],
    },
    book_id: {
      type: String,
      required: [true, "please enter book_id"],
    },
    order_status: {
      type: String,
      required: true,
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
