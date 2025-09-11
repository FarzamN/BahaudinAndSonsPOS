import { Schema, model } from "mongoose";

const inventorySchema = new Schema({
  size: { type: String, required: true },
  gauge: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  dateTime: { type: Date, required: true, default: Date.now },
  merchantName: { type: String, required: true }, // fixed: should be String not Date
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Inventory = model("Inventory", inventorySchema);
export default Inventory;
