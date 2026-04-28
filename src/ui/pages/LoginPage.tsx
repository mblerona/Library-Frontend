import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import authRepository from "../../repositories/authRepository";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await authRepository.login({ username, password });

            // 🔥 Save token
            localStorage.setItem("token", response.token);

            // Redirect after login
            navigate("/books");
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <Paper sx={{ p: 4, maxWidth: 400, margin: "auto", mt: 5 }}>
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>

            <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleLogin}
            >
                Login
            </Button>
        </Paper>
    );
};

export default LoginPage;