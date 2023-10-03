// This file is not used instead of backend and provides a mock of the APIs
// ToDo: replace this whole file along with the localstorage usage with a real database or a simple online API

import { generateUniqueId } from "./utils";

export const addVehicles = (newVehicles: Vehicle[]) => {
  const localStorageVehicles = localStorage.getItem("vehicles");
  const vehicleList = localStorageVehicles
    ? JSON.parse(localStorageVehicles)
    : [];
  newVehicles.forEach((newVehicle) => {
    const id = newVehicle.id ?? generateUniqueId();
    vehicleList.push({ ...newVehicle, id });
  });
  localStorage.setItem("vehicles", JSON.stringify(vehicleList));
};

export const updateVehicle = (newVehicle: Vehicle) => {
  let updatedVehicle = newVehicle;
  const localStorageVehicles = localStorage.getItem("vehicles");
  const vehicleList: Vehicle[] = localStorageVehicles
    ? JSON.parse(localStorageVehicles)
    : [];
  if (updatedVehicle.id) {
    const index = vehicleList.findIndex(
      (vehicle) => vehicle.id === updatedVehicle.id,
    );
    vehicleList[index] = updatedVehicle;
  } else {
    updatedVehicle.id = generateUniqueId();
    vehicleList.push({ ...updatedVehicle });
  }
  localStorage.setItem("vehicles", JSON.stringify(vehicleList));
  return updatedVehicle;
};

export const getVehicles = (searchQuery?: string) => {
  const localStorageVehicles = localStorage.getItem("vehicles");
  const vehicleList: Vehicle[] = localStorageVehicles
    ? JSON.parse(localStorageVehicles)
    : [];
  const filteredVehicles = searchQuery
    ? vehicleList.filter(
        (item) =>
          item?.name &&
          item.name
            .toLocaleLowerCase()
            .indexOf(searchQuery.toLocaleLowerCase()) > -1,
      )
    : vehicleList;
  return filteredVehicles.map((item) => ({
    name: item.name,
    id: item.id,
  }));
};

export const getVehicleById = (id: Id) => {
  const localStorageVehicles = localStorage.getItem("vehicles");
  const vehicleList: Vehicle[] = localStorageVehicles
    ? JSON.parse(localStorageVehicles)
    : [];
  return vehicleList.find((item) => item.id === id);
};
