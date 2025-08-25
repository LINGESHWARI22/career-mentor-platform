import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const onChange = () => setAuthed(!!localStorage.getItem("token"));
    window.addEventListener("storage", onChange);
    window.addEventListener("auth-change", onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener("auth-change", onChange);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthed(false);
    window.dispatchEvent(new Event("auth-change"));
    navigate("/login");
  };

  return (
    <nav className="bg-red-500 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Career Mentor</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:opacity-80">Home</Link>

        {!authed ? (
          <>
            <Link to="/login" className="hover:opacity-80">Login</Link>
            <Link to="/signup" className="hover:opacity-80">Signup</Link>
            <Link to="/register" className="hover:opacity-80">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:opacity-80">Dashboard</Link>
            <button
              onClick={logout}
              className="bg-black/20 px-3 py-1 rounded hover:bg-black/30"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
