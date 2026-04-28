import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import countryRepository from "../../repositories/countryRepository";
import type { Country } from "../../api/types/Country";
import { Typography, Paper } from "@mui/material";

const CountryDetailsPage = () => {
    const { id } = useParams();
    const [country, setCountry] = useState<Country | null>(null);

    useEffect(() => {
        if (id) {
            countryRepository.findById(Number(id)).then(setCountry);
        }
    }, [id]);

    if (!country) return <p>Loading...</p>;

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h4">{country.name}</Typography>
            <Typography>Continent: {country.continent}</Typography>
        </Paper>
    );
};

export default CountryDetailsPage;