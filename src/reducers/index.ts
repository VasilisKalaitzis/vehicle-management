import { combineReducers } from "redux";
import { vehicleReducer } from "./vehicle-reducer";
import { equipmentReducer } from "./equipment-reducer";

export const rootReducer = combineReducers({
  vehicle: vehicleReducer,
  equipment: equipmentReducer,
});
