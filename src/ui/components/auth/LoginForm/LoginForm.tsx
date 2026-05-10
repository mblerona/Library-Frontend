import {
    Alert,
    Box,
    Button,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useLogin from "../../../../hooks/useLogin";

const LoginForm = () => {
    const navigate = useNavigate();
    const login = useLogin();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setError("");

        try {
            await login({ username, password });
            navigate("/books");
        } catch {
            setError("Invalid username or password.");
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {error && <Alert severity="error">{error}</Alert>}

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
                variant="contained"
                type="button"
                onClick={handleSubmit}
            >
                Login
            </Button>

            <Button
                variant="text"
                type="button"
                onClick={() => navigate("/register")}
            >
                Don't have an account? Register
            </Button>
        </Box>
    );
};

export default LoginForm;