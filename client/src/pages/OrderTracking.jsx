import { useEffect } from "react";
import React, { use } from "react";

function OrderTracking() {
  const [order, setOrder] = React.useState(null);

  useEffect(() => {
    setOrder(localStorage.getItem("token"));
    // Fetch order data from the server
    // Update the order state with the fetched data
  }, []);
  return <div>{order}</div>;
}

export default OrderTracking;
