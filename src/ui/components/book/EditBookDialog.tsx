import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    type SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";

import type { Book, BookFormData } from "../../../api/types/Book";
import useAuthors from "../../../hooks/useAuthors";

interface FormData {
    name: string;
    category: string;
    authorId: string;
    state: string;
    availableCopies: string;
}

interface EditBookDialogProps {
    open: boolean;
    onClose: () => void;
    onEdit: (id: number, data: BookFormData) => Promise<void>;
    book: Book | null;
}

const initialFormData: FormData = {
    name: "",
    category: "",
    authorId: "",
    state: "",
    availableCopies: "",
};

const EditBookDialog = ({ open, onClose, onEdit, book }: EditBookDialogProps) => {
    const { authors } = useAuthors();
    const [formData, setFormData] = useState<FormData>(initialFormData);

    useEffect(() => {
        if (!book) {
            setFormData(initialFormData);
            return;
        }

        setFormData({
            name: book.name,
            category: book.category,
            authorId: String(book.authorId),
            state: book.state,
            availableCopies: String(book.availableCopies),
        });
    }, [book]);

    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            | SelectChangeEvent
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!book) return;

        const payload: BookFormData = {
            name: formData.name.trim(),
            category: formData.category,
            authorId: Number(formData.authorId),
            state: formData.state,
            availableCopies: Number(formData.availableCopies),
        };

        await onEdit(book.id, payload);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Book</DialogTitle>

            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />

                <FormControl margin="dense" fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <MenuItem value="NOVEL">NOVEL</MenuItem>
                        <MenuItem value="THRILLER">THRILLER</MenuItem>
                        <MenuItem value="HISTORY">HISTORY</MenuItem>
                        <MenuItem value="FANTASY">FANTASY</MenuItem>
                        <MenuItem value="BIOGRAPHY">BIOGRAPHY</MenuItem>
                        <MenuItem value="CLASSICS">CLASSICS</MenuItem>
                        <MenuItem value="DRAMA">DRAMA</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth>
                    <InputLabel>Author</InputLabel>
                    <Select
                        label="Author"
                        name="authorId"
                        value={formData.authorId}
                        onChange={handleChange}
                    >
                        {authors.map((author) => (
                            <MenuItem key={author.id} value={String(author.id)}>
                                {author.name} {author.surname}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    >
                        <MenuItem value="GOOD">GOOD</MenuItem>
                        <MenuItem value="BAD">BAD</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    margin="dense"
                    label="Available Copies"
                    name="availableCopies"
                    value={formData.availableCopies}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="success">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditBookDialog;