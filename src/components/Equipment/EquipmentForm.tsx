import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectEquipment,
  updateEquipment,
} from "../../actions/equipmentActions";

const EquipmentForm = () => {
  const dispatch = useDispatch();
  const { selectedEquipment } = useSelector<RootState, EquipmentState>(
    (state) => state.equipment,
  );
  const [formData, setFormData] = useState(selectedEquipment ?? {});
  const [isEditing, setIsEditing] = useState(!selectedEquipment?.id);

  // Watch for changes in equipment data to update the form when editing is active
  useEffect(() => {
    if (!isEditing) {
      setFormData(selectedEquipment ?? {});
    }
  }, [selectedEquipment, isEditing]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    let newValue = value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleEditSaveClick = () => {
    if (isEditing) {
      dispatch(updateEquipment(formData));
    }
    setIsEditing(!isEditing);
  };

  return (
    <Box width="100%" height="inherit" data-testid="equipmentForm">
      <Box p="8px 16px" display="flex" height="38px">
        <Typography variant="h4" pr="16px">
          Equipment
        </Typography>
      </Box>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextField
              label="ID"
              name="id"
              value={formData?.id}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              margin="normal"
              disabled={true}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              label="Name"
              name="name"
              value={formData?.name}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              margin="normal"
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
        {!isEditing && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ m: "4px 8px" }}
            onClick={() => dispatch(deselectEquipment())}
          >
            Back
          </Button>
        )}
        {isEditing && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ m: "4px 8px" }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ m: "4px 8px" }}
          onClick={handleEditSaveClick}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
      </form>
    </Box>
  );
};

export default EquipmentForm;
