import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";

interface DeleteAuthorDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => Promise<void>;
    authorName: string;
}

const DeleteAuthorDialog = ({
                                open,
                                onClose,
                                onConfirm,
                                authorName,
                            }: DeleteAuthorDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Delete Author</DialogTitle>

            <DialogContent>
                <Typography>
                    Are you sure you want to delete "{authorName}"?
                </Typography>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>

                <Button variant="contained" color="error" onClick={onConfirm}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteAuthorDialog;