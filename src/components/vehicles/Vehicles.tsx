import { RootState } from "../../store";
import { useSelector } from "react-redux";
import ItemTileList from "../common/tiles/ItemTileList";
import { fetchVehicles } from "../../actions/vehicleActions";

const Vehicles = () => {
  const { vehicleList } = useSelector<RootState, VehicleState>(
    (state) => state.vehicle,
  );
  // View equipment data
  const handleClickOnEquipment = (id: string) => {};

  // handle import new equipments
  const handleImport = (option: ImportType) => {};

  return (
    <ItemTileList
      title="Vehicles"
      itemList={vehicleList}
      onFetchItems={fetchVehicles}
      onItemClick={handleClickOnEquipment}
      onImport={handleImport}
    />
  );
};

export default Vehicles;
