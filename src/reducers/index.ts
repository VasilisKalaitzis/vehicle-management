import { combineReducers } from "redux";
import { vehicleReducer } from './vehicleReducer';
import {equipmentReducer} from './equipmentReducer';

export const rootReducer = combineReducers({
  vehicle: vehicleReducer,
  equipment: equipmentReducer,
});
