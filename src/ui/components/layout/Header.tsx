import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
            <Toolbar>
                {/* Logo / Title */}
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                    📚 Library App
                </Typography>

                {/* Navigation */}
                {token && (
                    <Box sx={{ display: "flex", gap: 2 }}>


                        <Button color="inherit" component={Link} to="/books">
                            Books
                        </Button>

                        <Button color="inherit" component={Link} to="/authors">
                            Authors
                        </Button>

                        <Button color="inherit" component={Link} to="/countries">
                            Countries
                        </Button>
                        <Button color="inherit" component={Link} to="/categoryStatistics">
                            Statistics
                        </Button>

                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={handleLogout}
                            sx={{ ml: 2, borderColor: "white" }}
                        >
                            Logout
                        </Button>
                    </Box>
                )}

                {!token && (
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button color="inherit" component={Link} to="/home">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>

                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button>

                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;