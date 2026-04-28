import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useCountries from "../../hooks/useCountries";

const CountriesPage = () => {
    const countries = useCountries();
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Countries
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Continent</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {countries.map((country) => (
                            <TableRow
                                key={country.id}
                                hover
                                sx={{ cursor: "pointer" }}
                                onClick={() => navigate(`/countries/${country.id}`)}
                            >
                                <TableCell>{country.name}</TableCell>
                                <TableCell>{country.continent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CountriesPage;