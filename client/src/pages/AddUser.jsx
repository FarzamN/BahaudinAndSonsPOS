import { useState } from "react";
import { useNavigate } from "react-router";
import { registerAPI } from "../apis/authAPIs";

export default function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // update form state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // call your API
    registerAPI(formData, navigate, setLoading);
  };

  return (
    <section className="add-user p-3">
      <h2 className="fs-3 fw-medium lh-sm">Add User</h2>
      <form className="row mt-5" onSubmit={handleSubmit}>
        <div className="col-lg-12 mb-3">
          <label htmlFor="username" className="form-label fs-5 fw-semibold">
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg fs-6 fw-normal"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-12 mb-3">
          <label htmlFor="email" className="form-label fs-5 fw-semibold">
            Email
          </label>
          <input
            type="email"
            className="form-control form-control-lg fs-6 fw-normal"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="col-lg-12 mb-3">
          <label htmlFor="password" className="form-label fs-5 fw-semibold">
            User Password
          </label>
          <input
            type="password"
            className="form-control form-control-lg fs-6 fw-normal"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="submit"
            className="btn btn-lg btn-primary"
            value={loading ? "Loading..." : "Submit"}
            disabled={loading}
          />
        </div>
      </form>
    </section>
  );
}
