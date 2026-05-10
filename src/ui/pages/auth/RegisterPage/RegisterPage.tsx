import {
    Box,
    Paper,
    Typography,
} from "@mui/material";

import RegisterForm from "../../../components/auth/RegisterForm/RegisterForm";

const RegisterPage = () => {
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
                    maxWidth: 460,
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                    Register
                </Typography>

                <RegisterForm />
            </Paper>
        </Box>
    );
};

export default RegisterPage;