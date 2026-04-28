import axios from "../axios/axios";
import type { Book } from "../api/types/Book";

const bookRepository = {
    findAll: async (): Promise<Book[]> => {
        const response = await axios.get<Book[]>("/books");
        return response.data;
    },

    findById: async (id: number): Promise<Book> => {
        const response = await axios.get<Book>(`/books/${id}`);
        return response.data;
    },
};

export default bookRepository;