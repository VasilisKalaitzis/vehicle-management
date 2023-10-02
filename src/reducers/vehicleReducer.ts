import { VehicleAction, VehicleActionTypes } from "../actions/vehicleActions";

const initialState: VehicleState = {
  vehicleList: [],
};

export const vehicleReducer = (
  state = initialState,
  action: VehicleAction,
): VehicleState => {
  switch (action.type) {
    case VehicleActionTypes.SELECT_VEHICLE:
      return { ...state, selectedVehicle: action.payload };
    case VehicleActionTypes.DESELECT_VEHICLE:
      return { ...state, selectedVehicle: undefined };
    case VehicleActionTypes.FETCH_VEHICLES:
      return { ...state, vehicleList: action.payload };
    default:
      return state;
  }
};
