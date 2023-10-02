import { NEW_ITEM_TEMP_ID } from "../constants/item";
import backendApi from "../mock-backend-services";

export enum VehicleActionTypes {
  SELECT_VEHICLE = "SELECT_VEHICLE",
  DESELECT_VEHICLE = "DESELECT_VEHICLE",
  FETCH_VEHICLES = "FETCH_VEHICLES",
  ADD_VEHICLES = "ADD_VEHICLES",
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

interface AddVehiclesAction {
  type: VehicleActionTypes.ADD_VEHICLES;
  payload: Vehicle[];
}

export type VehicleAction =
  | SelectVehicleAction
  | DeselectVehicleAction
  | FetchVehiclesAction
  | AddVehiclesAction;

export const selectVehicle = (id: Id) => {
  const vehicle = id !== NEW_ITEM_TEMP_ID ? backendApi.getVehicleById(id) : {};
  return {
    type: VehicleActionTypes.SELECT_VEHICLE,
    payload: vehicle,
  };
};

export const deselectVehicle = () => ({
  type: VehicleActionTypes.DESELECT_VEHICLE,
});

export const fetchVehicles = (searchQuery?: string) => {
  return {
    type: VehicleActionTypes.FETCH_VEHICLES,
    payload: backendApi.getVehicles(searchQuery),
  };
};

export const addVehicles = (vehicles: Vehicle[]) => {
  backendApi.saveVehicles(vehicles);
  return {
    type: VehicleActionTypes.ADD_VEHICLES,
  };
};
