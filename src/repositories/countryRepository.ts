import axios from "../axios/axios";
import type { Country, CountryFormData } from "../api/types/Country";

const countryRepository = {
    findAll: async (): Promise<Country[]> => {
        const response = await axios.get<Country[]>("/countries");
        return response.data;
    },

    findById: async (id: number): Promise<Country> => {
        const response = await axios.get<Country>(`/countries/${id}`);
        return response.data;
    },

    add: async (data: CountryFormData): Promise<Country> => {
        const response = await axios.post<Country>("/countries/add", data);
        return response.data;
    },

    edit: async (id: number, data: CountryFormData): Promise<Country> => {
        const response = await axios.put<Country>(`/countries/${id}/edit`, data);
        return response.data;
    },

    delete: async (id: number): Promise<void> => {
        await axios.delete(`/countries/${id}/delete`);
    },
};

export default countryRepository;