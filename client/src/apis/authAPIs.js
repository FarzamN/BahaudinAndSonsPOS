import { apiRequest } from "../function";

export const loginAPI = async (data, nav, load) => {
  apiRequest({
    data,
    method: "POST",
    endpoint: "auth/login",
    onSuccess: ({ token }) => {
      localStorage.setItem("token", token);
      nav("/");
    },
    onFinally: load,
  });
};

export const allUsersAPI = async (setData, load) => {
  apiRequest({
    endpoint: "auth/all",
    onSuccess: ({ users }) => {
      setData(users);
    },
    onFinally: load,
  });
};

export const registerAPI = async (data, nav, load) => {
  apiRequest({
    data,
    method: "POST",
    endpoint: "auth/register",
    onSuccess: () => {
      nav("/Users");
    },
    onFinally: load,
  });
};
