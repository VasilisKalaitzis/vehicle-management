import {
  selectVehicle,
  deselectVehicle,
  fetchVehicles,
  addVehicles,
  updateVehicle,
  VehicleActionTypes,
} from "../vehicleActions";
import backendApi from "../../mockBackendServices";

jest.mock("../../mockBackendServices", () => ({
  getVehicleById: jest.fn(),
  getVehicles: jest.fn(),
  addVehicles: jest.fn(),
  updateVehicle: jest.fn(),
}));

describe("vehicle-actions", () => {
  const vehicles = [{ id: "1", name: "Vehicle 1" }];
  it("should create an action to select vehicle", () => {
    const action = selectVehicle("1");
    expect(action.type).toEqual(VehicleActionTypes.SELECT_VEHICLE);
  });

  it("should create an action to deselect vehicle", () => {
    const action = deselectVehicle();
    expect(action).toEqual({
      type: VehicleActionTypes.DESELECT_VEHICLE,
    });
  });

  it("should create an action to fetch vehicles", () => {
    const action = fetchVehicles();
    expect(action.type).toEqual(VehicleActionTypes.FETCH_VEHICLES);
  });

  it("should create an action to add vehicles", () => {
    const action = addVehicles(vehicles);
    expect(backendApi.addVehicles).toHaveBeenCalledWith([vehicles[0]]);
    expect(action).toEqual(fetchVehicles());
  });

  it("should create an action to update vehicle", () => {
    const action = updateVehicle(vehicles[0]);
    expect(backendApi.updateVehicle).toHaveBeenCalledWith(vehicles[0]);
    expect(action.type).toEqual(VehicleActionTypes.UPDATE_VEHICLE);
  });
});
