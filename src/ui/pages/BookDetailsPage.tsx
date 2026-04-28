import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookRepository from "../../repositories/bookRepository";
import type { Book } from "../../api/types/Book";
import { Typography, Paper } from "@mui/material";

const BookDetailsPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        if (id) {
            bookRepository.findById(Number(id)).then(setBook);
        }
    }, [id]);

    if (!book) return <p>Loading...</p>;

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h4">{book.name}</Typography>
            <Typography>Category: {book.category}</Typography>
            <Typography>State: {book.state}</Typography>
            <Typography>Available Copies: {book.availableCopies}</Typography>
            <Typography>Author: {book.authorFullName}</Typography>
            <Typography>Country: {book.countryName}</Typography>
        </Paper>
    );
};

export default BookDetailsPage;