import { RootState } from "../../store";
import { useSelector } from "react-redux";
import ItemTileList from "../common/ItemTileList";
import { fetchVehicles } from "../../actions/vehicleActions";

const Vehicles = () => {
  const { vehicleList } = useSelector<RootState, VehicleState>(
    (state) => state.vehicle,
  );
  // View equipment data
  const handleClickOnEquipment = (id: string) => {};

  // handle import new equipments
  const handleImport = () => {};

  return (
    <ItemTileList
      itemList={vehicleList}
      fetchItems={fetchVehicles}
      onItemClick={handleClickOnEquipment}
      onImport={handleImport}
    />
  );
};

export default Vehicles;
