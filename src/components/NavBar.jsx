import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav style={{ background: "#4f46e5", padding: "1rem", color: "white" }}>
            <span>React Firebase App</span>
            {user && (
                <button
                    style={{
                        background: "white",
                        color: "#4f46e5",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "5px",
                        marginLeft: "1rem",
                        cursor: "pointer"
                    }}
                    onClick={logout}
                >
                    Cerrar sesión
                </button>
            )}
        </nav>
    );
}