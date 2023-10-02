import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onImport: (option: ImportType) => void;
}

// This component represents The Dialog that appears when it is prompt to import data
const ImportDialog = ({ open, onClose, onImport }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Import Data</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          How would you like to import the data?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onImport(IMPORT_TYPE_VALUES.MANUAL)}>
          Manual Import
        </Button>
        <Button onClick={() => onImport(IMPORT_TYPE_VALUES.JSON)}>
          Import from JSON
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImportDialog;
