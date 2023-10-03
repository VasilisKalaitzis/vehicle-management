import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Switch,
  InputLabel,
  Button,
  Grid,
  FormControlLabel,
} from "@mui/material";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { deselectVehicle, updateVehicle } from "../../actions/vehicleActions";
import { ACTIVE_STATUS_VALUES, fuelTypes } from "../../constants/item";
import { fetchEquipments } from "../../actions/equipmentActions";

const VehicleForm = () => {
  const dispatch = useDispatch();
  const { selectedVehicle } = useSelector<RootState, VehicleState>(
    (state) => state.vehicle,
  );
  const { equipmentList } = useSelector<RootState, EquipmentState>(
    (state) => state.equipment,
  );
  const [formData, setFormData] = useState(selectedVehicle ?? {});
  const [isEditing, setIsEditing] = useState(!selectedVehicle?.id);

  // Watch for changes in vehicle data to update the form when editing is active
  useEffect(() => {
    if (!isEditing) {
      setFormData(selectedVehicle ?? {});
    }
  }, [selectedVehicle, isEditing]);

  // load the equipment, ToDo: improve performance
  useEffect(() => {
    dispatch(fetchEquipments());
  }, [dispatch]);

  const handleChange = (e: any) => {
    const { name, type, value, checked } = e.target;
    let newValue = value;
    if (type === "checkbox") {
      newValue = checked
        ? ACTIVE_STATUS_VALUES.ACTIVE
        : ACTIVE_STATUS_VALUES.INACTIVE;
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleEditSaveClick = () => {
    if (isEditing) {
      dispatch(updateVehicle(formData));
    }
    setIsEditing(!isEditing);
  };

  return (
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
        <Grid item xs={6} md={4}>
          <TextField
            label="Driver"
            name="driver"
            value={formData?.driver}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            margin="normal"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Fuel Type</InputLabel>
            <Select
              label="Fuel Type"
              name="fuelType"
              value={formData?.fuelType}
              onChange={handleChange}
              required
              disabled={!isEditing}
            >
              {fuelTypes.map((fuelType) => (
                <MenuItem
                  key={`vehicle-form-equipment-list-${fuelType}`}
                  value={fuelType}
                >
                  {fuelType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={4}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <FormControlLabel
              control={
                <Switch
                  name="status"
                  checked={
                    formData.status === ACTIVE_STATUS_VALUES.ACTIVE
                      ? true
                      : false
                  }
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              }
              label="Status"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} md={4}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Equipments</InputLabel>
            <Select
              label="Equipments"
              name="equipments"
              multiple
              value={formData?.equipments ?? []}
              onChange={handleChange}
              disabled={!isEditing}
            >
              {equipmentList.map(
                (equipment) =>
                  equipment.id && (
                    <MenuItem
                      key={`vehicle-form-equipment-list-${equipment.id}`}
                      value={equipment.id}
                    >
                      {equipment.name}
                    </MenuItem>
                  ),
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {!isEditing && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ m: "4px 8px" }}
          onClick={() => dispatch(deselectVehicle())}
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
  );
};

export default VehicleForm;
