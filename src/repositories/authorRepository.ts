import axios from "../axios/axios";
import type { Author, AuthorFormData } from "../api/types/Author";

const authorRepository = {
    findAll: async (): Promise<Author[]> => {
        const response = await axios.get<Author[]>("/authors");
        return response.data;
    },

    add: async (data: AuthorFormData): Promise<Author> => {
        const response = await axios.post<Author>("/authors/add", data);
        return response.data;
    },

    edit: async (id: number, data: AuthorFormData): Promise<Author> => {
        const response = await axios.put<Author>(`/authors/${id}/edit`, data);
        return response.data;
    },

    delete: async (id: number): Promise<void> => {
        await axios.delete(`/authors/${id}/delete`);
    },
};

export default authorRepository;