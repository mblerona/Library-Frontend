import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import authRepository from "../../repositories/authRepository";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {
        try {
            await authRepository.register(form);

            alert("Registration successful!");

            navigate("/login");
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <Paper sx={{ p: 4, maxWidth: 400, margin: "auto", mt: 5 }}>
            <Typography variant="h5" gutterBottom>
                Register
            </Typography>

            <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={form.name}
                onChange={handleChange}
            />

            <TextField
                label="Surname"
                name="surname"
                fullWidth
                margin="normal"
                value={form.surname}
                onChange={handleChange}
            />

            <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={handleChange}
            />

            <TextField
                label="Username"
                name="username"
                fullWidth
                margin="normal"
                value={form.username}
                onChange={handleChange}
            />

            <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={form.password}
                onChange={handleChange}
            />

            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#2e7d32" }}
                onClick={handleRegister}
            >
                Register
            </Button>
        </Paper>
    );
};

export default RegisterPage;