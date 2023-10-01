import vehicles from "../temp/vehicles.json";

export enum VehicleActionTypes {
  GET_VEHICLE = "GET_VEHICLE",
  GET_VEHICLES = "GET_VEHICLES",
}

interface GetVehicleAction {
  type: VehicleActionTypes.GET_VEHICLE;
  payload: Vehicle;
}

interface GetVehiclesAction {
  type: VehicleActionTypes.GET_VEHICLES;
  payload: Vehicle[];
}

export type VehicleAction = GetVehicleAction | GetVehiclesAction;

export const getVehicle = (id: string) => {
  const equipment = vehicles.find((item) => String(item.id) === id);
  return {
    type: VehicleActionTypes.GET_VEHICLE,
    payload: equipment,
  };
};

export const getVehicles = () => {
  const payload = vehicles.map((item) => ({ name: item.name, id: item.id }));
  return {
    type: VehicleActionTypes.GET_VEHICLES,
    payload,
  };
};
