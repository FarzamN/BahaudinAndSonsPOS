export const apiRequest = async ({
  method = "GET",
  endpoint,
  data = null,
  onSuccess,
  onFailure,
  onFinally,
}) => {
  try {
    onFinally?.(true);

    const token = localStorage.getItem("token");

    console.log({ token });
    const options = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    if (data && method !== "GET") {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`http://localhost:5000/${endpoint}`, options);
    const result = await response.json();

    if (result.status === "true") {
      onSuccess?.(result);
    } else {
      alert(result.msg);
      onFailure?.(result);
      console.warn("Request failed:", result.message || "Unknown error");
    }
  } catch (err) {
    console.error("Request error:", err.message);
    onFailure?.({ message: err.message });
  } finally {
    onFinally?.(false);
  }
};
