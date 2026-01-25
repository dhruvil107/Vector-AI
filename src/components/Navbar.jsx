import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="navbar"
      style={{
        position: "sticky",   
        width: "100%",
        zIndex: 10,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "10px 32px",
        background: "transparent",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: 700, fontSize: "18px", color: "#fff" }}>
        🧿 RetailVision
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.6)",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          style={{
            background: "#2bb0a3",
            border: "none",
            color: "#fff",
            padding: "6px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
