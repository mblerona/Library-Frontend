import axios from "../axios/axios";
import type { Country } from "../api/types/Country";

const countryRepository = {
    findAll: async (): Promise<Country[]> => {
        const response = await axios.get<Country[]>("/countries");
        return response.data;
    },

    findById: async (id: number): Promise<Country> => {
        const response = await axios.get<Country>(`/countries/${id}`);
        return response.data;
    },
};

export default countryRepository;