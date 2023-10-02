import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import ItemTileList from "../common/tiles/ItemTileList";
import {
  deselectVehicle,
  fetchVehicles,
  selectVehicle,
} from "../../actions/vehicleActions";
import VehicleView from "./VehicleView";
import { IMPORT_TYPE_VALUES, NEW_ITEM_TEMP_ID } from "../../constants/item";
import { useEffect } from "react";

const Vehicles = () => {
  const dispatch = useDispatch();
  const { vehicleList, selectedVehicle } = useSelector<RootState, VehicleState>(
    (state) => state.vehicle,
  );

  useEffect(() => {
    return () => {
      dispatch(deselectVehicle());
    };
  }, [dispatch]);

  // View equipment data
  const handleClickOnEquipment = (id: Id) => dispatch(selectVehicle(id));

  // handle import new vehicles
  const handleImport = (option: ImportType) => {
    if (option === IMPORT_TYPE_VALUES.MANUAL) {
      dispatch(selectVehicle(NEW_ITEM_TEMP_ID));
    }
  };

  return selectedVehicle === undefined ? (
    <ItemTileList
      title="Vehicles"
      itemList={vehicleList}
      onFetchItems={fetchVehicles}
      onItemClick={handleClickOnEquipment}
      onImport={handleImport}
    />
  ) : (
    <VehicleView />
  );
};

export default Vehicles;
