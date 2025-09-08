import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    } else {
      setLoad(true);
    }
  }, [navigate]);

  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, []);

  if (!load) {
    return <div>Loading...</div>; // optional loader
  }

  return <div>Dashboard</div>;
}
