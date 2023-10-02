import {
  EquipmentAction,
  EquipmentActionTypes,
} from "../actions/equipmentActions";

const initialState: EquipmentState = {
  equipmentList: [],
};

export const equipmentReducer = (
  state = initialState,
  action: EquipmentAction,
): EquipmentState => {
  switch (action.type) {
    case EquipmentActionTypes.FETCH_EQUIPMENT:
      return { ...state, selectedEquipment: action.payload };
    case EquipmentActionTypes.FETCH_EQUIPMENTS:
      return { ...state, equipmentList: action.payload };
    default:
      return state;
  }
};
