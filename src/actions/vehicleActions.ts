import { NEW_ITEM_TEMP_ID } from "../constants/item";
import backendApi from "../mockBackendServices";

export enum VehicleActionTypes {
  SELECT_VEHICLE = "SELECT_VEHICLE",
  DESELECT_VEHICLE = "DESELECT_VEHICLE",
  FETCH_VEHICLES = "FETCH_VEHICLES",
  ADD_VEHICLES = "ADD_VEHICLES",
  UPDATE_VEHICLE = "UPDATE_VEHICLE",
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

interface UpdateVehicleAction {
  type: VehicleActionTypes.UPDATE_VEHICLE;
  payload: Vehicle;
}

export type VehicleAction =
  | SelectVehicleAction
  | DeselectVehicleAction
  | FetchVehiclesAction
  | AddVehiclesAction
  | UpdateVehicleAction;

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
  backendApi.addVehicles(vehicles);
  return fetchVehicles();
};

export const updateVehicle = (vehicle: Vehicle) => {
  const updatedVehicle = backendApi.updateVehicle(vehicle);
  return {
    type: VehicleActionTypes.UPDATE_VEHICLE,
    payload: updatedVehicle,
  };
};
