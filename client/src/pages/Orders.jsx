import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getOrders } from "../apis/orderAPIs";
import moment from "moment";

export default function Orders() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getOrders(setData, setLoad);
  }, []);
  return (
    <section className="all-orders p-3">
      <div className="d-flex justify-content-between">
        <h2 className="fs-3 fw-medium lh-sm mb-0">All Orders</h2>
        <Link to="/AddOrder" className="btn btn-primary fs-6 fw-medium lh-sm">
          Add Order
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
                <th scope="col">Price</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Price after discount</th>
                <th scope="col">Discount in percentage</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{moment(item.dateTime).format("DD/MM/YYYY")}</td>
                  <td>{item.size}</td>
                  <td>{item.gauge}</td>
                  <td>{item.quantity}</td>
                  <td>{item.pricePerUnit}</td>
                  <td>{item.customerName}</td>
                  <td>{item.totalPriceAfterDiscount}</td>
                  <td>{`${item.discountPercentage}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
