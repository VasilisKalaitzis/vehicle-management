import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import ItemTileList from "../common/tiles/ItemTileList";
import {
  addVehicles,
  deselectVehicle,
  fetchVehicles,
  selectVehicle,
} from "../../actions/vehicleActions";
import VehicleForm from "./VehicleForm";
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
  const handleClickOnEquipment = (id?: Id) =>
    dispatch(selectVehicle(id ?? NEW_ITEM_TEMP_ID));

  // handle import new vehicles
  const handleImport = (option: ImportType, data?: Vehicle[]) => {
    if (option === IMPORT_TYPE_VALUES.MANUAL) {
      dispatch(selectVehicle(NEW_ITEM_TEMP_ID));
    } else if (option === IMPORT_TYPE_VALUES.JSON && data) {
      dispatch(addVehicles(data));
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
    <VehicleForm />
  );
};

export default Vehicles;
