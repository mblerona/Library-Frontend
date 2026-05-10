import {
    Card,
    CardContent,
    Grid,
    Typography,
    Chip,
    Box,
} from "@mui/material";
import useCategoryStatistics from "../../hooks/useCategoryStatistics";

const CategoryStatisticsPage = () => {
    const statistics = useCategoryStatistics();

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Category Statistics
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
                Aggregated book statistics by category.
            </Typography>

            <Grid container spacing={3}>
                {statistics.map((stat) => (
                    <Grid size={{ xs: 12, md: 4 }} key={stat.category}>
                        <Card sx={{ borderRadius: 3, height: "100%" }}>
                            <CardContent>
                                <Chip
                                    label={stat.category}
                                    color="success"
                                    sx={{ mb: 2, fontWeight: 600 }}
                                />

                                <Typography variant="h6">
                                    Total Books: {stat.totalBooks}
                                </Typography>

                                <Typography>
                                    Available Copies: {stat.totalAvailableCopies}
                                </Typography>

                                <Typography color="error">
                                    Bad Condition Books: {stat.badConditionBooks}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategoryStatisticsPage;