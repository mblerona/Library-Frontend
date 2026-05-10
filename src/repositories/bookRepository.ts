import axios from "../axios/axios";
import type { Book, BookFormData } from "../api/types/Book";

const bookRepository = {
    findAll: async (): Promise<Book[]> => {
        const response = await axios.get<Book[]>("/books");
        return response.data;
    },

    findById: async (id: number): Promise<Book> => {
        const response = await axios.get<Book>(`/books/${id}`);
        return response.data;
    },

    add: async (data: BookFormData): Promise<Book> => {
        const response = await axios.post<Book>("/books/add", data);
        return response.data;
    },

    edit: async (id: number, data: BookFormData): Promise<Book> => {
        const response = await axios.put<Book>(`/books/${id}/edit`, data);
        return response.data;
    },

    delete: async (id: number): Promise<void> => {
        await axios.delete(`/books/${id}/delete`);
    },
};

export default bookRepository;