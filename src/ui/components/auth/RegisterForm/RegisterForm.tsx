import {
    Alert,
    Box,
    Button,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useRegister from "../../../../hooks/useRegister";

const RegisterForm = () => {
    const navigate = useNavigate();
    const register = useRegister();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setError("");

        try {
            await register({
                name,
                surname,
                email,
                username,
                password,
            });

            navigate("/login");
        } catch {
            setError("Registration failed.");
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {error && <Alert severity="error">{error}</Alert>}

            <TextField
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
            />

            <TextField
                label="Surname"
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
                fullWidth
            />

            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
            />

            <TextField
                label="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                fullWidth
            />

            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
            />

            <Button
                fullWidth
                variant="contained"
                type="button"
                sx={{ mt: 2 }}
                onClick={handleSubmit}
            >
                Register
            </Button>

            <Button
                variant="text"
                type="button"
                onClick={() => navigate("/login")}
            >
                Already have an account? Login
            </Button>
        </Box>
    );
};

export default RegisterForm;