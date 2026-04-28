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
import useAuthors from "../../hooks/useAuthors";

const AuthorsPage = () => {
    const authors = useAuthors();
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Authors
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {authors.map((author) => (
                            <TableRow
                                key={author.id}
                                hover
                                sx={{ cursor: "pointer" }}
                                onClick={() => navigate(`/authors/${author.id}`)}
                            >
                                <TableCell>{author.name}</TableCell>
                                <TableCell>{author.surname}</TableCell>
                                <TableCell>{author.countryName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default AuthorsPage;