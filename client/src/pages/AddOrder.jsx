import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getInventories } from "../apis/inventoryAPIs";
import { createOrderAPI } from "../apis/orderAPIs";

export default function AddOrder() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    date: "",
    size: "",
    gauge: "",
    qty: "",
    price: "",
    customerName: "",
    discountInPercentage: "",
  });
  console.log(formData.date);

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      // date: formData.date,
      size: formData.size,
      gauge: Number(formData.gauge),
      quantity: Number(formData.qty),
      pricePerUnit: Number(formData.price),
      customerName: formData.customerName,
      discountPercentage: Number(formData.discountInPercentage),
    };
    createOrderAPI(payload, navigate, setLoad);
  };

  useEffect(() => {
    getInventories(setData, setLoad);
  }, []);

  return (
    <section className="add-order p-3">
      <h2 className="fs-3 fw-medium lh-sm">Add Order</h2>
      <form className="row mt-5" onSubmit={handleSubmit}>
        <div className="col-lg-4 mb-3">
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
          <select
            className="form-select form-select-lg fs-6 fw-normal"
            id="size"
            value={formData.size}
            onChange={handleChange}
          >
            {data.map((item, index) => (
              <option key={index} value={item.size}>
                {item.size}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="gauge" className="form-label fs-5 fw-semibold">
            Gauge
          </label>
          <select
            className="form-select form-select-lg fs-6 fw-normal"
            id="gauge"
            value={formData.gauge}
            onChange={handleChange}
          >
            {data.map((item, index) => (
              <option key={index} value={item.gauge}>
                {item.gauge}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-4 mb-3">
          <label htmlFor="qty" className="form-label fs-5 fw-semibold">
            Quantity
          </label>
          <input
            type="number"
            className="form-control form-control-lg fs-6 fw-normal"
            id="qty"
            value={formData.qty}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-4 mb-3">
          <label htmlFor="price" className="form-label fs-5 fw-semibold">
            Price
          </label>
          <input
            type="number"
            className="form-control form-control-lg fs-6 fw-normal"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-6 mb-3">
          <label htmlFor="customerName" className="form-label fs-5 fw-semibold">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg fs-6 fw-normal"
            id="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-6 mb-3">
          <label
            htmlFor="discountInPercentage"
            className="form-label fs-5 fw-semibold"
          >
            Discount in percentage
          </label>
          <input
            type="number"
            className="form-control form-control-lg fs-6 fw-normal"
            id="discountInPercentage"
            value={formData.discountInPercentage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            disabled={load}
            type="submit"
            className="btn btn-lg btn-primary"
            value={load ? "Loading..." : "Submit"}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </section>
  );
}
