import ItemTile from "../common/ItemTile";
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from '../../actions/vehicleActions';
import { useEffect } from "react";
import { Box } from "@mui/material";

const Vehicles = () => {
  const dispatch = useDispatch();
  const { vehicleList } = useSelector<RootState, VehicleState>((state) => state.vehicle);
  const onClick = (id: string) => {

  };
  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);
  return (
    <Box display="flex" flexWrap="wrap">
      {vehicleList.map((vehicle) => <ItemTile
        onClick={onClick}
        id={vehicle.id}
        label={vehicle.name}
        image={require("../../temp/default_image.png")}
      />)}
  </Box>
  );
};

export default Vehicles;
