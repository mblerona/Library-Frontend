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
import { useEffect, useState } from "react";
import * as React from "react";

import type { Author, AuthorFormData } from "../../../api/types/Author";
import useCountries from "../../../hooks/useCountries";

interface FormData {
    name: string;
    surname: string;
    countryId: string;
}

const initialFormData: FormData = {
    name: "",
    surname: "",
    countryId: "",
};

interface EditAuthorDialogProps {
    open: boolean;
    onClose: () => void;
    onEdit: (id: number, data: AuthorFormData) => Promise<void>;
    author: Author | null;
}

const EditAuthorDialog = ({
                              open,
                              onClose,
                              onEdit,
                              author,
                          }: EditAuthorDialogProps) => {
    const { countries } = useCountries();
    const [formData, setFormData] = useState<FormData>(initialFormData);

    useEffect(() => {
        if (!author) {
            setFormData(initialFormData);
            return;
        }

        setFormData({
            name: author.name,
            surname: author.surname,
            countryId: String(author.countryId),
        });
    }, [author]);

    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            | SelectChangeEvent
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!author) return;

        const payload: AuthorFormData = {
            name: formData.name.trim(),
            surname: formData.surname.trim(),
            countryId: Number(formData.countryId),
        };

        await onEdit(author.id, payload);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Author</DialogTitle>

            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                />

                <FormControl margin="dense" fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select
                        label="Country"
                        name="countryId"
                        value={formData.countryId}
                        onChange={handleChange}
                    >
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={String(country.id)}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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

export default EditAuthorDialog;