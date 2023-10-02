import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import ItemTile from "../common/ItemTile";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { fetchVehicles } from "../../actions/vehicleActions";
import { Box } from "@mui/material";
import ActionTile from "../common/ActionTile";
import Searchbar from "../common/Searchbar";

const Vehicles = () => {
  const dispatch = useDispatch();
  const { vehicleList } = useSelector<RootState, VehicleState>(
    (state) => state.vehicle,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const onClick = (id: string) => {};

  const handleAddVehicle = () => {};
  useEffect(() => {
    dispatch(fetchVehicles(searchQuery));
  }, [dispatch, searchQuery]);
  return (
    <Box width="100%">
      <Box p="8px 16px">
        {" "}
        <Searchbar onChange={setSearchQuery} />{" "}
      </Box>
      <Box display="flex" flexWrap="wrap">
        {vehicleList.map((vehicle) => (
          <ItemTile
            key={`vehicle-list-key${vehicle.id}`}
            onClick={onClick}
            id={vehicle.id}
            label={vehicle.name}
            image={require("../../temp/default_image.png")}
          />
        ))}
        <ActionTile
          label="Add Vehicle"
          icon={<Add fontSize="large" />}
          id="addVehicle"
          onClick={handleAddVehicle}
        />
      </Box>
    </Box>
  );
};

export default Vehicles;
