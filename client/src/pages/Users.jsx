import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allUsersAPI } from "../apis/authAPIs";
import { useState } from "react";

export default function Users() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    allUsersAPI(setData, setLoading);
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, []);

  console.log(data);
  return (
    <section className="users p-3">
      <div className="d-flex justify-content-between">
        <h2 className="fs-3 fw-medium lh-sm mb-0">All Users</h2>
        <Link to="/AddUser" className="btn btn-primary fs-6 fw-medium lh-sm">
          {loading ? "Loading..." : "Add User"}
        </Link>
      </div>
      <div className="table-responsive mt-5">
        <table className="table table-bordered ">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>************</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
