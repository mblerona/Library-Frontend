import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useState } from "react";

import useAuthors from "../../hooks/useAuthors";
import useAuth from "../../hooks/useAuth";

import type { Author } from "../../api/types/Author";

import AddAuthorDialog from "../components/author/AddAuthorDialog";
import EditAuthorDialog from "../components/author/EditAuthorDialog.tsx";
import DeleteAuthorDialog from "../components/author/DeleteAuthorDialog";

const AuthorsPage = () => {
    const {
        authors,
        loading,
        addAuthor,
        editAuthor,
        deleteAuthor,
    } = useAuthors();

    const { user } = useAuth();

    const isAdmin =
        user?.roles?.includes("ROLE_ADMINISTRATOR") ?? false;

    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedAuthor, setSelectedAuthor] =
        useState<Author | null>(null);

    const handleEditClick = (author: Author) => {
        setSelectedAuthor(author);
        setEditOpen(true);
    };

    const handleDeleteClick = (author: Author) => {
        setSelectedAuthor(author);
        setDeleteOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedAuthor) return;

        await deleteAuthor(selectedAuthor.id);

        setDeleteOpen(false);
        setSelectedAuthor(null);
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography variant="h4">
                    Authors
                </Typography>

                {isAdmin && (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => setAddOpen(true)}
                    >
                        Add Author
                    </Button>
                )}
            </Box>

            <TableContainer
                component={Paper}
                sx={{ borderRadius: 3 }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Country</TableCell>

                            {isAdmin && (
                                <TableCell align="right">
                                    Actions
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {authors.map((author) => (
                            <TableRow key={author.id}>
                                <TableCell>
                                    {author.name}
                                </TableCell>

                                <TableCell>
                                    {author.surname}
                                </TableCell>

                                <TableCell>
                                    {author.countryName}
                                </TableCell>

                                {isAdmin && (
                                    <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            sx={{ mr: 1 }}
                                            onClick={() =>
                                                handleEditClick(
                                                    author
                                                )
                                            }
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() =>
                                                handleDeleteClick(
                                                    author
                                                )
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {isAdmin && (
                <>
                    <AddAuthorDialog
                        open={addOpen}
                        onClose={() =>
                            setAddOpen(false)
                        }
                        onAdd={addAuthor}
                    />

                    <EditAuthorDialog
                        open={editOpen}
                        onClose={() => {
                            setEditOpen(false);
                            setSelectedAuthor(null);
                        }}
                        onEdit={editAuthor}
                        author={selectedAuthor}
                    />

                    <DeleteAuthorDialog
                        open={deleteOpen}
                        onClose={() => {
                            setDeleteOpen(false);
                            setSelectedAuthor(null);
                        }}
                        onConfirm={
                            handleConfirmDelete
                        }
                        authorName={
                            selectedAuthor
                                ? `${selectedAuthor.name} ${selectedAuthor.surname}`
                                : ""
                        }
                    />
                </>
            )}
        </Box>
    );
};

export default AuthorsPage;