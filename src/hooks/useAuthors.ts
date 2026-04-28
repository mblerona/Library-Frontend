import { useEffect, useState } from "react";
import authorRepository from "../repositories/authorRepository";
import type { Author } from "../api/types/Author";

const useAuthors = () => {
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        authorRepository.findAll().then(setAuthors);
    }, []);

    return authors;
};

export default useAuthors;