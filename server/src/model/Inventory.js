import { Schema, model } from "mongoose";

const inventorySchema = new Schema({
  size: { type: String, required: true },
  guage: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  dateTime: { type: Date, required: true, default: Date.now },
  merchantName: { type: String, required: true }, // fixed: should be String not Date
});

const Inventory = model("Inventory", inventorySchema);
export default Inventory;
