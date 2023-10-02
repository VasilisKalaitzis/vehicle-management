import { useSelector } from "react-redux";
import { RootState } from "../../store";

const VehicleView = () => {
  const { selectedVehicle } = useSelector<RootState, VehicleState>(
    (state) => state.vehicle,
  );
  return <>{selectedVehicle?.name}</>;
};

export default VehicleView;
