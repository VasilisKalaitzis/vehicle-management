import equipments from "../temp/equipments.json";

export enum EquipmentActionTypes {
  GET_EQUIPMENT = "GET_EQUIPMENT",
  GET_EQUIPMENTS = "GET_EQUIPMENTS",
}

interface GetEquipmentAction {
  type: EquipmentActionTypes.GET_EQUIPMENT;
  payload: Equipment;
}

interface GetEquipmentsAction {
  type: EquipmentActionTypes.GET_EQUIPMENTS;
  payload: Equipment[];
}

export type EquipmentAction = GetEquipmentAction | GetEquipmentsAction;

export const getEquipment = (id: string) => {
  const equipment = equipments.find((item) => String(item.id) === id);
  return {
    type: EquipmentActionTypes.GET_EQUIPMENT,
    payload: equipment,
  };
};

export const getEquipments = () => {
  const payload = equipments.map((item) => ({ name: item.name, id: item.id }));
  return {
    type: EquipmentActionTypes.GET_EQUIPMENTS,
    payload,
  };
};
