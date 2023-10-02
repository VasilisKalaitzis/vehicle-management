import equipments from "../temp/equipments.json";

export enum EquipmentActionTypes {
  FETCH_EQUIPMENT = "FETCH_EQUIPMENT",
  FETCH_EQUIPMENTS = "FETCH_EQUIPMENTS",
}

interface GetEquipmentAction {
  type: EquipmentActionTypes.FETCH_EQUIPMENT;
  payload: Equipment;
}

interface GetEquipmentsAction {
  type: EquipmentActionTypes.FETCH_EQUIPMENTS;
  payload: Equipment[];
}

export type EquipmentAction = GetEquipmentAction | GetEquipmentsAction;

export const fetchEquipment = (id: string) => {
  const equipment = equipments.find((item) => String(item.id) === id);
  return {
    type: EquipmentActionTypes.FETCH_EQUIPMENT,
    payload: equipment,
  };
};

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
