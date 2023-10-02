import equipments from "../temp/equipments.json";
import { NEW_ITEM_TEMP_ID } from "../constants/item";

export enum EquipmentActionTypes {
  SELECT_EQUIPMENT = "SELECT_EQUIPMENT",
  DESELECT_EQUIPMENT = "DESELECT_EQUIPMENT",
  FETCH_EQUIPMENTS = "FETCH_EQUIPMENTS",
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

export type EquipmentAction =
  | SelectEquipmentAction
  | DeselectEquipmentAction
  | FetchEquipmentsAction;

export const selectEquipment = (id: Id) => {
  const equipment =
    id !== NEW_ITEM_TEMP_ID ? equipments.find((item) => item.id === id) : {};
  return {
    type: EquipmentActionTypes.SELECT_EQUIPMENT,
    payload: equipment,
  };
};

export const deselectEquipment = () => ({
  type: EquipmentActionTypes.SELECT_EQUIPMENT,
});

export const fetchEquipments = (searchQuery?: string) => {
  const filteredEquipments = searchQuery
    ? equipments.filter(
        (item) =>
          item?.name
            ?.toLocaleLowerCase()
            .indexOf(searchQuery.toLocaleLowerCase()) > -1,
      )
    : equipments;
  const payload = filteredEquipments.map((item) => ({
    name: item.name,
    id: item.id,
  }));
  return {
    type: EquipmentActionTypes.FETCH_EQUIPMENTS,
    payload,
  };
};
