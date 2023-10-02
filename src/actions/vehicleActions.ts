import vehicles from "../temp/vehicles.json";

export enum VehicleActionTypes {
  FETCH_VEHICLE = "FETCH_VEHICLE",
  FETCH_VEHICLES = "FETCH_VEHICLES",
}

interface GetVehicleAction {
  type: VehicleActionTypes.FETCH_VEHICLE;
  payload: Vehicle;
}

interface GetVehiclesAction {
  type: VehicleActionTypes.FETCH_VEHICLES;
  payload: Vehicle[];
}

export type VehicleAction = GetVehicleAction | GetVehiclesAction;

export const fetchVehicle = (id: string) => {
  const equipment = vehicles.find((item) => String(item.id) === id);
  return {
    type: VehicleActionTypes.FETCH_VEHICLE,
    payload: equipment,
  };
};

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
