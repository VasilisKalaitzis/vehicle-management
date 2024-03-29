// This file is temporarily used instead of backend and provides a mock of the APIs
// ToDo: replace this whole file along with the localstorage usage with a real database or a simple online API

import { generateUniqueId } from "./utils";

export const addEquipments = (newEquipments: Equipment[]) => {
  const localStorageEquipments = localStorage.getItem("equipments");
  const equipmentList = localStorageEquipments
    ? JSON.parse(localStorageEquipments)
    : [];
  newEquipments.forEach((newEquipment) => {
    const id = newEquipment.id ?? generateUniqueId();
    equipmentList.push({ ...newEquipment, id });
  });
  localStorage.setItem("equipments", JSON.stringify(equipmentList));
};

export const updateEquipment = (newEquipment: Equipment) => {
  let updatedEquipment = newEquipment;
  const localStorageEquipments = localStorage.getItem("equipments");
  const equipmentList: Equipment[] = localStorageEquipments
    ? JSON.parse(localStorageEquipments)
    : [];
  if (updatedEquipment.id) {
    const index = equipmentList.findIndex(
      (equipment) => equipment.id === updatedEquipment.id,
    );
    equipmentList[index] = updatedEquipment;
  } else {
    updatedEquipment.id = generateUniqueId();
    equipmentList.push({ ...updatedEquipment });
  }
  localStorage.setItem("equipments", JSON.stringify(equipmentList));
  return updatedEquipment;
};

export const getEquipments = (searchQuery?: string) => {
  const localStorageEquipments = localStorage.getItem("equipments");
  const equipmentList: Equipment[] = localStorageEquipments
    ? JSON.parse(localStorageEquipments)
    : [];
  const filteredEquipments = searchQuery
    ? equipmentList.filter(
        (item) =>
          item?.name &&
          item.name
            .toLocaleLowerCase()
            .indexOf(searchQuery.toLocaleLowerCase()) > -1,
      )
    : equipmentList;
  return filteredEquipments.map((item) => ({
    name: item.name,
    id: item.id,
  }));
};

export const getEquipmentById = (id: Id) => {
  const localStorageEquipments = localStorage.getItem("equipments");
  const equipmentList: Equipment[] = localStorageEquipments
    ? JSON.parse(localStorageEquipments)
    : [];
  return equipmentList.find((item) => item.id === id);
};
