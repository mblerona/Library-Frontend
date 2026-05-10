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

import useBooks from "../../hooks/useBooks";
import useAuth from "../../hooks/useAuth";

import type { Book } from "../../api/types/Book";

import AddBookDialog from "../components/book/AddBookDialog";
import EditBookDialog from "../components/book/EditBookDialog";
import DeleteBookDialog from "../components/book/DeleteBookDialog";

const BooksPage = () => {
    const { books, loading, addBook, editBook, deleteBook } = useBooks();

    const { user } = useAuth();

    const isAdmin =
        user?.roles?.includes("ROLE_ADMINISTRATOR") ?? false;

    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedBook, setSelectedBook] =
        useState<Book | null>(null);

    const handleEditClick = (book: Book) => {
        setSelectedBook(book);
        setEditOpen(true);
    };

    const handleDeleteClick = (book: Book) => {
        setSelectedBook(book);
        setDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedBook) return;

        await deleteBook(selectedBook.id);

        setDeleteOpen(false);
        setSelectedBook(null);
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
                    Books
                </Typography>

                {isAdmin && (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => setAddOpen(true)}
                    >
                        Add Book
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
                            <TableCell>Category</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>
                                Available Copies
                            </TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Country</TableCell>

                            {isAdmin && (
                                <TableCell align="right">
                                    Actions
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {books.map((book) => (
                            <TableRow key={book.id}>
                                <TableCell>
                                    {book.name}
                                </TableCell>

                                <TableCell>
                                    {book.category}
                                </TableCell>

                                <TableCell>
                                    {book.state}
                                </TableCell>

                                <TableCell>
                                    {book.availableCopies}
                                </TableCell>

                                <TableCell>
                                    {book.authorFullName}
                                </TableCell>

                                <TableCell>
                                    {book.countryName}
                                </TableCell>

                                {isAdmin && (
                                    <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            sx={{ mr: 1 }}
                                            onClick={() =>
                                                handleEditClick(
                                                    book
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
                                                    book
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
                    <AddBookDialog
                        open={addOpen}
                        onClose={() =>
                            setAddOpen(false)
                        }
                        onAdd={addBook}
                    />

                    <EditBookDialog
                        open={editOpen}
                        onClose={() => {
                            setEditOpen(false);
                            setSelectedBook(null);
                        }}
                        onEdit={editBook}
                        book={selectedBook}
                    />

                    <DeleteBookDialog
                        open={deleteOpen}
                        onClose={() => {
                            setDeleteOpen(false);
                            setSelectedBook(null);
                        }}
                        onConfirm={
                            handleConfirmDelete
                        }
                        bookName={
                            selectedBook?.name ?? ""
                        }
                    />
                </>
            )}
        </Box>
    );
};

export default BooksPage;