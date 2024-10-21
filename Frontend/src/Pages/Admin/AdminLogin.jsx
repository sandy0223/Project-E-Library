import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // demonstration purposes
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (credentials.username === adminUsername && credentials.password === adminPassword) {
      localStorage.setItem("isAdmin", true);
      navigate("/admin/borrowers");
      alert("Welcome Admin");
    } else {
      setError("Invalid username or password");
      alert("Invalid login attempt")
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b from-purple-600 to-slate-200 mx-auto rounded-lg h-screen">
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
       <div className="flex items-center justify-center h-screen">
       <form onSubmit={handleSubmit} className="space-y-4 w-96 p-4 rounded-xl shadow-lg bg-slate-100 h-96 border-emerald-400 border-4 ">
        <div className="flex justify-center">
          <h1><img className="w-24" src="/images/ELogo.png" alt="" /></h1>
        </div>
        <div>
          <label className="block text-lg font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
        >
          Login
        </button>
      </form>
       </div>
    </div>
  );
};

export default AdminLogin;
