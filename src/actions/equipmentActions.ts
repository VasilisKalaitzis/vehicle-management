import { NEW_ITEM_TEMP_ID } from "../constants/item";
import backendApi from "../mock-backend-services";

export enum EquipmentActionTypes {
  SELECT_EQUIPMENT = "SELECT_EQUIPMENT",
  DESELECT_EQUIPMENT = "DESELECT_EQUIPMENT",
  FETCH_EQUIPMENTS = "FETCH_EQUIPMENTS",
  ADD_EQUIPMENTS = "ADD_EQUIPMENTS",
}

interface SelectEquipmentAction {
  type: EquipmentActionTypes.SELECT_EQUIPMENT;
  payload: Equipment;
}

interface DeselectEquipmentAction {
  type: EquipmentActionTypes.DESELECT_EQUIPMENT;
}

interface FetchEquipmentsAction {
  type: EquipmentActionTypes.FETCH_EQUIPMENTS;
  payload: Equipment[];
}

interface AddEquipmentsAction {
  type: EquipmentActionTypes.ADD_EQUIPMENTS;
  payload: Equipment[];
}

export type EquipmentAction =
  | SelectEquipmentAction
  | DeselectEquipmentAction
  | FetchEquipmentsAction
  | AddEquipmentsAction;

export const selectEquipment = (id: Id) => {
  const equipment =
    id !== NEW_ITEM_TEMP_ID ? backendApi.getEquipmentById(id) : {};
  return {
    type: EquipmentActionTypes.SELECT_EQUIPMENT,
    payload: equipment,
  };
};

export const deselectEquipment = () => ({
  type: EquipmentActionTypes.DESELECT_EQUIPMENT,
});

export const fetchEquipments = (searchQuery?: string) => {
  return {
    type: EquipmentActionTypes.FETCH_EQUIPMENTS,
    payload: backendApi.getEquipments(searchQuery),
  };
};

export const addEquipments = (equipments: Equipment[]) => {
  backendApi.saveEquipments(equipments);
  return fetchEquipments();
};
