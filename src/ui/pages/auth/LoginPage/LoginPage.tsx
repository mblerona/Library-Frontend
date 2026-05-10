import {
    Box,
    Paper,
    Typography,
} from "@mui/material";

import LoginForm from "../../../components/auth/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Paper
                sx={{
                    width: "100%",
                    maxWidth: 420,
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    Login
                </Typography>

                <LoginForm />
            </Paper>
        </Box>
    );
};

export default LoginPage;