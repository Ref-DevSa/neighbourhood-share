import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

function Login() {
  const [name, setName] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) return;
    auth.login(name);
    navigate(from, { replace: true });
  }

  return (
    <main className="login-container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;