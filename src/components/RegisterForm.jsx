import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("✅ Usuario registrado");
        } catch (err) {
            setError("❌ Error al registrar usuario");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Registro</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit">Registrarse</button>
                </form>
                <p style={{ marginTop: "1rem", textAlign: "center" }}>
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" style={{ color: "#4f46e5" }}>Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
}
