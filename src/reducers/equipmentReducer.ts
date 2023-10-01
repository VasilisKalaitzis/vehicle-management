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
    case EquipmentActionTypes.GET_EQUIPMENT:
      return { ...state, selectedEquipment: action.payload };
    case EquipmentActionTypes.GET_EQUIPMENTS:
      return { ...state, equipmentList: action.payload };
    default:
      return state;
  }
};
