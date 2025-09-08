import { apiRequest } from "../function";

export const createInventoryAPI = async (data, nav, load) => {
  apiRequest({
    data,
    method: "POST",
    endpoint: "inventory",
    onSuccess: () => {
      nav("/Inventories");
    },
    onFinally: load,
  });
};

export const getInventories = async (setData, load) => {
  apiRequest({
    method: "GET",
    endpoint: "inventory",
    onSuccess: ({ data }) => {
      setData(data);
    },
    onFinally: load,
  });
};
