import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SidebarLayout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <div style={{
                width: "220px",
                backgroundColor: "#4f46e5",
                color: "white",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div>
                    <h2>Mi App</h2>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{ margin: "1rem 0" }}>Dashboard</li>
                        <li style={{ margin: "1rem 0" }}>Productos</li>
                        <li style={{ margin: "1rem 0" }}>Usuarios</li>
                        <li style={{ margin: "1rem 0" }}>Reportes</li>
                    </ul>
                </div>
                <div>
                    <p style={{ fontSize: "0.9rem" }}>{user?.email}</p>
                    <button
                        onClick={handleLogout}
                        style={{
                            marginTop: "1rem",
                            background: "white",
                            color: "#4f46e5",
                            border: "none",
                            borderRadius: "5px",
                            padding: "0.5rem 1rem",
                            cursor: "pointer",
                            width: "100%"
                        }}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>

            {/* Contenido */}
            <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f6f6f6" }}>
                {children}
            </div>
        </div>
    );
}