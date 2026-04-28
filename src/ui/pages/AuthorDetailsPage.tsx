import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authorRepository from "../../repositories/authorRepository";
import type { Author } from "../../api/types/Author";
import { Typography, Paper } from "@mui/material";

const AuthorDetailsPage = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState<Author | null>(null);

    useEffect(() => {
        if (id) {
            authorRepository.findById(Number(id)).then(setAuthor);
        }
    }, [id]);

    if (!author) return <p>Loading...</p>;

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h4">
                {author.name} {author.surname}
            </Typography>
            <Typography>Country: {author.countryName}</Typography>
        </Paper>
    );
};

export default AuthorDetailsPage;