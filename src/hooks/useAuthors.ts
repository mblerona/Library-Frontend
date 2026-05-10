import { useCallback, useEffect, useState } from "react";
import authorRepository from "../repositories/authorRepository";
import type { Author, AuthorFormData } from "../api/types/Author";

const useAuthors = () => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAuthors = useCallback(async () => {
        setLoading(true);

        try {
            const data = await authorRepository.findAll();
            setAuthors(data);
        } catch (error) {
            console.error("Failed to fetch authors:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const loadAuthors = async () => {
            await fetchAuthors();
        };

        void loadAuthors();
    }, [fetchAuthors]);

    const addAuthor = useCallback(
        async (data: AuthorFormData) => {
            await authorRepository.add(data);
            await fetchAuthors();
        },
        [fetchAuthors]
    );

    const editAuthor = useCallback(
        async (id: number, data: AuthorFormData) => {
            await authorRepository.edit(id, data);
            await fetchAuthors();
        },
        [fetchAuthors]
    );

    const deleteAuthor = useCallback(
        async (id: number) => {
            await authorRepository.delete(id);
            await fetchAuthors();
        },
        [fetchAuthors]
    );

    return {
        authors,
        loading,
        fetchAuthors,
        addAuthor,
        editAuthor,
        deleteAuthor,
    };
};

export default useAuthors;