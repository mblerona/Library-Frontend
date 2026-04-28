import { useEffect, useState } from "react";
import bookRepository from "../repositories/bookRepository";
import type { Book } from "../api/types/Book";

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        bookRepository.findAll().then(setBooks);
    }, []);

    return books;
};

export default useBooks;