import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useState } from "react";

import useCountries from "../../hooks/useCountries";
import useAuth from "../../hooks/useAuth";

import type { Country } from "../../api/types/Country";

import AddCountryDialog from "../components/country/AddCountryDialog";
import EditCountryDialog from "../components/country/EditCountryDialog";
import DeleteCountryDialog from "../components/country/DeleteCountryDialog";

const CountriesPage = () => {
    const {
        countries,
        loading,
        addCountry,
        editCountry,
        deleteCountry,
    } = useCountries();

    const { user } = useAuth();

    const isAdmin =
        user?.roles?.includes("ROLE_ADMINISTRATOR") ?? false;

    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedCountry, setSelectedCountry] =
        useState<Country | null>(null);

    const handleEditClick = (country: Country) => {
        setSelectedCountry(country);
        setEditOpen(true);
    };

    const handleDeleteClick = (country: Country) => {
        setSelectedCountry(country);
        setDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedCountry) return;

        await deleteCountry(selectedCountry.id);

        setDeleteOpen(false);
        setSelectedCountry(null);
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography variant="h4">
                    Countries
                </Typography>

                {isAdmin && (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => setAddOpen(true)}
                    >
                        Add Country
                    </Button>
                )}
            </Box>

            <TableContainer
                component={Paper}
                sx={{ borderRadius: 3 }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Continent</TableCell>

                            {isAdmin && (
                                <TableCell align="right">
                                    Actions
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {countries.map((country) => (
                            <TableRow key={country.id}>
                                <TableCell>
                                    {country.name}
                                </TableCell>

                                <TableCell>
                                    {country.continent}
                                </TableCell>

                                {isAdmin && (
                                    <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            sx={{ mr: 1 }}
                                            onClick={() =>
                                                handleEditClick(
                                                    country
                                                )
                                            }
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() =>
                                                handleDeleteClick(
                                                    country
                                                )
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {isAdmin && (
                <>
                    <AddCountryDialog
                        open={addOpen}
                        onClose={() =>
                            setAddOpen(false)
                        }
                        onAdd={addCountry}
                    />

                    <EditCountryDialog
                        open={editOpen}
                        onClose={() => {
                            setEditOpen(false);
                            setSelectedCountry(null);
                        }}
                        onEdit={editCountry}
                        country={selectedCountry}
                    />

                    <DeleteCountryDialog
                        open={deleteOpen}
                        onClose={() => {
                            setDeleteOpen(false);
                            setSelectedCountry(null);
                        }}
                        onConfirm={
                            handleConfirmDelete
                        }
                        countryName={
                            selectedCountry?.name ?? ""
                        }
                    />
                </>
            )}
        </Box>
    );
};

export default CountriesPage;