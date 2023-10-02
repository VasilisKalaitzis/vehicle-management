import React, { useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
import { IMPORT_TYPE_VALUES } from "../../constants/item";

interface Props {
  open: boolean;
  onClose: () => void;
  onImport: (option: ImportType, data?: any) => void;
}

const readFileAsJSON = (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target?.result as string);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (event) => {
      reject(event.target?.error);
    };
    reader.readAsText(file);
  });
};

// This component represents The Dialog that appears when it is prompt to import data
const ImportDialog = ({ open, onClose, onImport }: Props) => {
  // Create a ref for the file input element
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleImport = async (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === "application/json") {
        try {
          const jsonData = await readFileAsJSON(file);
          onImport(IMPORT_TYPE_VALUES.JSON, jsonData);
        } catch (error) {
          alert("Error reading JSON file.");
        }
      } else {
        alert("Invalid file format. Please select a JSON file.");
      }
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleImport(files);
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    handleImport(files);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Import Data</DialogTitle>
      <DialogContent>
        <Typography variant="body1" marginBottom="16px">
          How would you like to import the data?
        </Typography>
        <Box
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            border: "2px dashed #cccccc",
            borderRadius: "4px",
            padding: "40px",
            textAlign: "center",
            backgroundColor: "inherit",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2">
            Drag & Drop JSON file here to import.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <input
          type="file"
          accept=".json" // Specify the allowed file types, e.g., JSON
          onChange={handleFileInput}
          ref={fileInputRef}
          style={{ display: "none" }}
          id="fileInput" // Associate with the button using the "for" attribute
        />
        <Button
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          Import from JSON file
        </Button>
        <Button onClick={() => onImport(IMPORT_TYPE_VALUES.MANUAL)}>
          Import Manually
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImportDialog;
