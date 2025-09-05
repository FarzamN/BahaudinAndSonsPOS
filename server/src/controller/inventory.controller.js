import Inventory from "../model/Inventory.js";

// CREATE
export const createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ (all)
export const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res.json({ data: inventories, status: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (by ID)
export const getInventoryById = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory)
      return res
        .status(404)
        .json({ status: false, msg: "Inventory not found" });
    res.json({ status: true, data: inventory });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!inventory)
      return res
        .status(404)
        .json({ status: false, msg: "Inventory not found" });
    res.json({ status: true, data: inventory });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory)
      return res
        .status(404)
        .json({ status: false, msg: "Inventory not found" });
    res.json({ status: true, msg: "Inventory deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
