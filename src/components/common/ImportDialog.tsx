import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { IMPORT_TYPE_VALUES } from "../../constants/item";

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
          Import Manually
        </Button>
        <Button onClick={() => onImport(IMPORT_TYPE_VALUES.JSON)}>
          Import from File
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImportDialog;
