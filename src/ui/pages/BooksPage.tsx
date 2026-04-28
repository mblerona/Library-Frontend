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
import useBooks from "../../hooks/useBooks";
import { useNavigate } from "react-router-dom";

const BooksPage = () => {
    const books = useBooks();
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Books
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Available Copies</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {books.map((book) => (
                            <TableRow
                                key={book.id}
                                hover
                                sx={{ cursor: "pointer" }}
                                onClick={() => navigate(`/books/${book.id}`)}
                            >
                                <TableCell>{book.name}</TableCell>
                                <TableCell>{book.category}</TableCell>
                                <TableCell>{book.state}</TableCell>
                                <TableCell>{book.availableCopies}</TableCell>
                                <TableCell>{book.authorFullName}</TableCell>
                                <TableCell>{book.countryName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default BooksPage;