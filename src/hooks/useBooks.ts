import { useCallback, useEffect, useState } from "react";
import bookRepository from "../repositories/bookRepository";
import type { Book, BookFormData } from "../api/types/Book";

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchBooks = useCallback(async () => {
        setLoading(true);

        try {
            const data = await bookRepository.findAll();
            setBooks(data);
        } catch (error) {
            console.error("Failed to fetch books:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addBook = useCallback(
        async (data: BookFormData) => {
            await bookRepository.add(data);
            await fetchBooks();
        },
        [fetchBooks]
    );

    const editBook = useCallback(
        async (id: number, data: BookFormData) => {
            await bookRepository.edit(id, data);
            await fetchBooks();
        },
        [fetchBooks]
    );

    const deleteBook = useCallback(
        async (id: number) => {
            await bookRepository.delete(id);
            await fetchBooks();
        },
        [fetchBooks]
    );

    useEffect(() => {
        void fetchBooks();
    }, [fetchBooks]);

    return {
        books,
        loading,
        fetchBooks,
        addBook,
        editBook,
        deleteBook,
    };
};

export default useBooks;