import { useCallback, useEffect, useState } from "react";
import countryRepository from "../repositories/countryRepository";
import type { Country, CountryFormData } from "../api/types/Country";

const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchCountries = useCallback(async () => {
        setLoading(true);

        try {
            const data = await countryRepository.findAll();
            setCountries(data);
        } catch (error) {
            console.error("Failed to fetch countries:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addCountry = useCallback(
        async (data: CountryFormData) => {
            await countryRepository.add(data);
            await fetchCountries();
        },
        [fetchCountries]
    );

    const editCountry = useCallback(
        async (id: number, data: CountryFormData) => {
            await countryRepository.edit(id, data);
            await fetchCountries();
        },
        [fetchCountries]
    );

    const deleteCountry = useCallback(
        async (id: number) => {
            await countryRepository.delete(id);
            await fetchCountries();
        },
        [fetchCountries]
    );

    useEffect(() => {
        void fetchCountries();
    }, [fetchCountries]);

    return {
        countries,
        loading,
        fetchCountries,
        addCountry,
        editCountry,
        deleteCountry,
    };
};

export default useCountries;