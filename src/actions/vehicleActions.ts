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

export type ShapeAction = GetVehicleAction | GetVehiclesAction;

export const getVehicles = () => {
  return {
    type: VehicleActionTypes.GET_VEHICLES,
    payload: [],
  };
};

export const getVehicle = () => {
  return {
    type: VehicleActionTypes.GET_VEHICLE,
    payload: { id: "", name: "" },
  };
};
