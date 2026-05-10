import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";

interface DeleteBookDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => Promise<void>;
    bookName: string;
}

const DeleteBookDialog = ({
                              open,
                              onClose,
                              onConfirm,
                              bookName,
                          }: DeleteBookDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Delete Book</DialogTitle>

            <DialogContent>
                <Typography>
                    Are you sure you want to delete "{bookName}"?
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

export default DeleteBookDialog;