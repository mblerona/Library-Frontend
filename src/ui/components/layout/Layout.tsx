import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header />

            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "#f5f5f5",
                    pt: 4,
                }}
            >
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </Box>
        </>
    );
};

export default Layout;