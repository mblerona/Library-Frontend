import { useEffect, useState } from "react";
import countryRepository from "../repositories/countryRepository";
import type { Country } from "../api/types/Country";

const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        countryRepository.findAll().then(setCountries);
    }, []);

    return countries;
};

export default useCountries;