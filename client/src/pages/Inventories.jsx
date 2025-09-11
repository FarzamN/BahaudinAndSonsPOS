import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import moment from "moment";
import { getInventories } from "../apis/inventoryAPIs";

export default function Inventories() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getInventories(setData, setLoad);
  }, []);

  return (
    <section className="all-inventories p-3">
      <div className="d-flex justify-content-between">
        <h2 className="fs-3 fw-medium lh-sm mb-0">Inventories</h2>
        <Link
          to="/AddInventory"
          className="btn btn-primary fs-6 fw-medium lh-sm"
        >
          Add Inventory
        </Link>
      </div>
      {load ? (
        <h2 className="fs-3 fw-medium lh-sm mb-0">Please Wait...</h2>
      ) : (
        <div className="table-responsive mt-5">
          <table className="table table-bordered ">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Size</th>
                <th scope="col">Gauge</th>
                <th scope="col">Qty</th>
                <th scope="col">Price per unit</th>
                <th scope="col">Merchant Name</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{moment(item.dateTime).format("MMM Do YY")}</td>
                  <td>{item.size}</td>
                  <td>{item.gauge}</td>
                  <td>{item.quantity}</td>
                  <td>{item.pricePerUnit}</td>
                  <td>{item.merchantName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
