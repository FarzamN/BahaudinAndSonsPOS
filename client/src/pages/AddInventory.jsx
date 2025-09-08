import { useState } from "react";
import { useNavigate } from "react-router";
import { createInventoryAPI } from "../apis/inventoryAPIs";

export default function AddInventory() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    size: "",
    gauge: "",
    quantity: "",
    pricePerUnit: "",
    merchantName: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Build request object
    const payload = {
      merchantName: formData.merchantName,
      pricePerUnit: Number(formData.pricePerUnit),
      quantity: Number(formData.quantity),
      gauge: Number(formData.gauge),
      size: formData.size,
      date: formData.date, // optional if you need it
    };

    createInventoryAPI(payload, navigate, setLoad);
  };

  return (
    <section className="add-inventory p-3">
      <h2 className="fs-3 fw-medium lh-sm">Add Inventory</h2>
      <form className="row mt-5" onSubmit={handleSubmit}>
        <div className="col-lg-6 mb-3">
          <label htmlFor="date" className="form-label fs-5 fw-semibold">
            Date
          </label>
          <input
            type="date"
            className="form-control form-control-lg fs-6 fw-normal"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="size" className="form-label fs-5 fw-semibold">
            Size
          </label>
          <input
            type="text"
            className="form-control form-control-lg fs-6 fw-normal"
            id="size"
            value={formData.size}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="gauge" className="form-label fs-5 fw-semibold">
            Gauge
          </label>
          <input
            type="number"
            className="form-control form-control-lg fs-6 fw-normal"
            id="gauge"
            value={formData.gauge}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="quantity" className="form-label fs-5 fw-semibold">
            Quantity
          </label>
          <input
            type="number"
            className="form-control form-control-lg fs-6 fw-normal"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="pricePerUnit" className="form-label fs-5 fw-semibold">
            Price per unit
          </label>
          <input
            type="number"
            className="form-control form-control-lg fs-6 fw-normal"
            id="pricePerUnit"
            value={formData.pricePerUnit}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="merchantName" className="form-label fs-5 fw-semibold">
            Merchant name
          </label>
          <input
            type="text"
            className="form-control form-control-lg fs-6 fw-normal"
            id="merchantName"
            value={formData.merchantName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            disabled={load}
            type="submit"
            className="btn btn-lg btn-primary"
            value={load ? "Loading..." : "Submit"}
          />
        </div>
      </form>
    </section>
  );
}
