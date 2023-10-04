import { vehicleReducer } from "../vehicleReducer";
import {
  VehicleActionTypes,
  VehicleAction,
} from "../../actions/vehicleActions";

describe("vehicle-reducer", () => {
  it("should handle SELECT_VEHICLE action", () => {
    const initialState = {
      vehicleList: [],
    };

    const selectedVehicle = { id: "1", name: "Selected Vehicle" };
    const action: VehicleAction = {
      type: VehicleActionTypes.SELECT_VEHICLE,
      payload: selectedVehicle,
    };

    const newState = vehicleReducer(initialState, action);

    expect(newState.selectedVehicle).toEqual(selectedVehicle);
  });

  it("should handle DESELECT_VEHICLE action", () => {
    const initialState = {
      vehicleList: [],
      selectedVehicle: { id: "1", name: "Selected Vehicle" },
    };

    const action: VehicleAction = {
      type: VehicleActionTypes.DESELECT_VEHICLE,
    };

    const newState = vehicleReducer(initialState, action);

    expect(newState.selectedVehicle).toBeUndefined();
  });

  it("should handle FETCH_VEHICLES action", () => {
    const initialState = {
      vehicleList: [],
    };

    const fetchedVehicleList = [
      { id: "1", name: "Vehicle 1" },
      { id: "2", name: "Vehicle 2" },
    ];

    const action: VehicleAction = {
      type: VehicleActionTypes.FETCH_VEHICLES,
      payload: fetchedVehicleList,
    };

    const newState = vehicleReducer(initialState, action);

    expect(newState.vehicleList).toEqual(fetchedVehicleList);
  });

  it("should handle UPDATE_VEHICLE action", () => {
    const initialState = {
      vehicleList: [],
    };

    const updatedVehicle = { id: "1", name: "Updated Vehicle" };
    const action: VehicleAction = {
      type: VehicleActionTypes.UPDATE_VEHICLE,
      payload: updatedVehicle,
    };

    const newState = vehicleReducer(initialState, action);

    expect(newState.selectedVehicle).toEqual(updatedVehicle);
  });

  it("should return the initial state for an unknown action", () => {
    const initialState = {
      vehicleList: [],
    };

    const action: VehicleAction = {
      type: "UNKNOWN_ACTION" as any,
    };

    const newState = vehicleReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
