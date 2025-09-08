import { apiRequest } from "../function";

export const createOrderAPI = async (data, nav, load) => {
  apiRequest({
    data,
    method: "POST",
    endpoint: "orders",
    onSuccess: () => {
      nav("/Orders");
    },
    onFinally: load,
  });
};

export const getOrders = async (setData, load) => {
  apiRequest({
    method: "GET",
    endpoint: "orders",
    onSuccess: ({ data }) => {
      setData(data);
    },
    onFinally: load,
  });
};
