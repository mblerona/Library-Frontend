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
import { useState } from "react";
import * as React from "react";
import type { BookFormData } from "../../../api/types/Book";
import useAuthors from "../../../hooks/useAuthors";

interface FormData {
    name: string;
    category: string;
    authorId: string;
    state: string;
    availableCopies: string;
}

const initialFormData: FormData = {
    name: "",
    category: "",
    authorId: "",
    state: "",
    availableCopies: "",
};

interface AddBookDialogProps {
    open: boolean;
    onClose: () => void;
    onAdd: (data: BookFormData) => Promise<void>;
}

const AddBookDialog = ({ open, onClose, onAdd }: AddBookDialogProps) => {
    const { authors } = useAuthors();
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            | SelectChangeEvent
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const payload: BookFormData = {
            name: formData.name.trim(),
            category: formData.category,
            authorId: Number(formData.authorId),
            state: formData.state,
            availableCopies: Number(formData.availableCopies),
        };

        await onAdd(payload);
        setFormData(initialFormData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Add Book</DialogTitle>

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
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddBookDialog;