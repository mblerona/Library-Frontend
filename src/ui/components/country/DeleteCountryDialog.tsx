import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@mui/material";

interface DeleteCountryDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => Promise<void>;
    countryName: string;
}

const DeleteCountryDialog = ({
                                 open,
                                 onClose,
                                 onConfirm,
                                 countryName,
                             }: DeleteCountryDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Delete Country</DialogTitle>

            <DialogContent>
                <Typography>
                    Are you sure you want to delete "{countryName}"?
                </Typography>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    onClick={onConfirm}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteCountryDialog;