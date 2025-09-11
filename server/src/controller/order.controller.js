import Order from "../model/Order.js";
import Inventory from "../model/Inventory.js";

// CREATE
export const createOrder = async (req, res) => {
  try {
    const {
      size,
      gauge,
      quantity,
      pricePerUnit,
      customerName,
      discountPercentage,
    } = req.body;

    // 1️⃣ Find matching inventory item

    const inventoryItem = await Inventory.findOne({
      size,
      gauge,
      user: req.user,
    });

    if (!inventoryItem) {
      return res
        .status(404)
        .json({ status: "false", msg: "Item not available in inventory" });
    }

    // 2️⃣ Check if enough stock
    if (inventoryItem.quantity < quantity) {
      return res.status(400).json({
        status: "false",
        msg: `Only ${inventoryItem.quantity} units available in stock`,
      });
    }

    // 3️⃣ Calculate prices
    const totalPrice = quantity * pricePerUnit;
    const discount = (discountPercentage / 100) * totalPrice;
    const totalPriceAfterDiscount = totalPrice - discount;

    // 4️⃣ Create new order
    const order = await Order.create({
      size,
      gauge,
      quantity,
      pricePerUnit,
      customerName,
      discountPercentage,
      totalPriceAfterDiscount,
      dateTime: new Date(),
      user: req.user,
    });

    // 5️⃣ Update inventory stock
    inventoryItem.quantity -= quantity;
    await inventoryItem.save();

    res.status(201).json({ status: "true", data: order });
  } catch (err) {
    res.status(400).json({ status: "false", error: err.message });
  }
};

// READ (all orders)
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user });
    res.status(200).json({ status: "true", data: orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (single order by ID)
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order)
      return res.status(404).json({ status: "false", msg: "Order not found" });
    res.json({ data: order, status: "true" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order)
      return res.status(404).json({ status: "false", msg: "Order not found" });
    res.json({ data: order, status: "true" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order)
      return res.status(404).json({ status: "false", msg: "Order not found" });
    res.json({ status: "true", msg: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
