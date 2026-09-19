import { useState } from "react";
import api from "../../api/axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/signup", {
        username,
        password,
      });

      const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";
      window.location.href = `${dashboardUrl}?token=${res.data.token}&username=${res.data.username}`;
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="container py-5">
      <div className="row d-flex flex-column align-items-center text-center">
        <h1 className="mb-4">Create your account</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%" }}>
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100 py-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;