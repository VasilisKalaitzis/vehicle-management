import {
  selectEquipment,
  deselectEquipment,
  fetchEquipments,
  addEquipments,
  updateEquipment,
  EquipmentActionTypes,
} from "../equipment-actions";
import backendApi from "../../mock-backend-services";

jest.mock("../../mock-backend-services", () => ({
  getEquipmentById: jest.fn(),
  getEquipments: jest.fn(),
  addEquipments: jest.fn(),
  updateEquipment: jest.fn(),
}));

describe("equipment-actions", () => {
  const equipments = [{ id: "1", name: "Equipment 1" }];
  it("should create an action to select equipment", () => {
    const action = selectEquipment("1");
    expect(action.type).toEqual(EquipmentActionTypes.SELECT_EQUIPMENT);
  });

  it("should create an action to select equipment even if id is invalid", () => {
    const action = selectEquipment("2");
    expect(action.type).toEqual(EquipmentActionTypes.SELECT_EQUIPMENT);
  });

  it("should create an action to deselect equipment", () => {
    const action = deselectEquipment();
    expect(action).toEqual({
      type: EquipmentActionTypes.DESELECT_EQUIPMENT,
    });
  });

  it("should create an action to fetch equipments", () => {
    const action = fetchEquipments();
    expect(action.type).toEqual(EquipmentActionTypes.FETCH_EQUIPMENTS);
  });

  it("should create an action to add equipments", () => {
    const action = addEquipments(equipments);
    expect(backendApi.addEquipments).toHaveBeenCalledWith([equipments[0]]);
    expect(action).toEqual(fetchEquipments());
  });

  it("should create an action to update equipment", () => {
    const action = updateEquipment(equipments[0]);
    expect(backendApi.updateEquipment).toHaveBeenCalledWith(equipments[0]);
    expect(action.type).toEqual(EquipmentActionTypes.UPDATE_EQUIPMENT);
  });
});
