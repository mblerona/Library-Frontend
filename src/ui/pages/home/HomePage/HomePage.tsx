import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Box>
            <Box sx={{ textAlign: "center", mb: 5 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    Library Rental App
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Browse books, authors, and countries from your library system.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: "100%", borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Books
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                View all available books, their authors, category, condition,
                                and available copies.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/books"
                                sx={{ backgroundColor: "#2e7d32" }}
                            >
                                View Books
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: "100%", borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Authors
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                Explore authors and see which country each author is from.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/authors"
                                sx={{ backgroundColor: "#2e7d32" }}
                            >
                                View Authors
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: "100%", borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Countries
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                Browse countries and continents connected to the library
                                authors.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/countries"
                                sx={{ backgroundColor: "#2e7d32" }}
                            >
                                View Countries
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;