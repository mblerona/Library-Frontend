import axios from "../axios/axios";
import type { Author } from "../api/types/Author";

const authorRepository = {
    findAll: async (): Promise<Author[]> => {
        const response = await axios.get<Author[]>("/authors");
        return response.data;
    },

    findById: async (id: number): Promise<Author> => {
        const response = await axios.get<Author>(`/authors/${id}`);
        return response.data;
    },
};

export default authorRepository;