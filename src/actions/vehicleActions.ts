import vehicles from "../temp/vehicles.json";
import { NEW_ITEM_TEMP_ID } from "../constants/item";

export enum VehicleActionTypes {
  SELECT_VEHICLE = "SELECT_VEHICLE",
  DESELECT_VEHICLE = "DESELECT_VEHICLE",
  FETCH_VEHICLES = "FETCH_VEHICLES",
}

interface SelectVehicleAction {
  type: VehicleActionTypes.SELECT_VEHICLE;
  payload: Vehicle;
}

interface DeselectVehicleAction {
  type: VehicleActionTypes.DESELECT_VEHICLE;
}

interface FetchVehiclesAction {
  type: VehicleActionTypes.FETCH_VEHICLES;
  payload: Vehicle[];
}

export type VehicleAction =
  | SelectVehicleAction
  | DeselectVehicleAction
  | FetchVehiclesAction;

export const selectVehicle = (id: Id) => {
  const equipment =
    id !== NEW_ITEM_TEMP_ID
      ? vehicles.find((item) => String(item.id) === id)
      : {};
  return {
    type: VehicleActionTypes.SELECT_VEHICLE,
    payload: equipment,
  };
};

export const deselectVehicle = () => ({
  type: VehicleActionTypes.DESELECT_VEHICLE,
});

export const fetchVehicles = (searchQuery?: string) => {
  const filteredVehicles = searchQuery
    ? vehicles.filter(
        (item) =>
          item?.name
            ?.toLocaleLowerCase()
            .indexOf(searchQuery.toLocaleLowerCase()) > -1,
      )
    : vehicles;
  const payload = filteredVehicles.map((item) => ({
    name: item.name,
    id: item.id,
  }));
  return {
    type: VehicleActionTypes.FETCH_VEHICLES,
    payload,
  };
};
