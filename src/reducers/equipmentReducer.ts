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
    case EquipmentActionTypes.SELECT_EQUIPMENT:
      return { ...state, selectedEquipment: action.payload };
    case EquipmentActionTypes.DESELECT_EQUIPMENT:
      return { ...state, selectedEquipment: undefined };
    case EquipmentActionTypes.FETCH_EQUIPMENTS:
      return { ...state, equipmentList: action.payload };
    case EquipmentActionTypes.UPDATE_EQUIPMENT:
      return { ...state, selectedEquipment: action.payload };
    default:
      return state;
  }
};
