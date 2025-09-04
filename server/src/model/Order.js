import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  size: { type: String, required: true },
  guage: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  dateTime: { type: Date, required: true, default: Date.now },
  customerName: { type: String, required: true },
  totalPriceAfterDiscount: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
});

const Order = model("Order", orderSchema);
export default Order;
