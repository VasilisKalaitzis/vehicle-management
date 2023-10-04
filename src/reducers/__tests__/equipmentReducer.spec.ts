import { equipmentReducer } from "../equipmentReducer";
import {
  EquipmentActionTypes,
  EquipmentAction,
} from "../../actions/equipmentActions";

describe("equipment-reducer", () => {
  it("should handle SELECT_EQUIPMENT action", () => {
    const initialState = {
      equipmentList: [],
    };

    const selectedEquipment = { id: "1", name: "Selected Equipment" };
    const action: EquipmentAction = {
      type: EquipmentActionTypes.SELECT_EQUIPMENT,
      payload: selectedEquipment,
    };

    const newState = equipmentReducer(initialState, action);

    expect(newState.selectedEquipment).toEqual(selectedEquipment);
  });

  it("should handle DESELECT_EQUIPMENT action", () => {
    const initialState = {
      equipmentList: [],
      selectedEquipment: { id: "1", name: "Selected Equipment" },
    };

    const action: EquipmentAction = {
      type: EquipmentActionTypes.DESELECT_EQUIPMENT,
    };

    const newState = equipmentReducer(initialState, action);

    expect(newState.selectedEquipment).toBeUndefined();
  });

  it("should handle FETCH_EQUIPMENTS action", () => {
    const initialState = {
      equipmentList: [],
    };

    const fetchedEquipmentList = [
      { id: "1", name: "Equipment 1" },
      { id: "2", name: "Equipment 2" },
    ];

    const action: EquipmentAction = {
      type: EquipmentActionTypes.FETCH_EQUIPMENTS,
      payload: fetchedEquipmentList,
    };

    const newState = equipmentReducer(initialState, action);

    expect(newState.equipmentList).toEqual(fetchedEquipmentList);
  });

  it("should handle UPDATE_EQUIPMENT action", () => {
    const initialState = {
      equipmentList: [],
    };

    const updatedEquipment = { id: "1", name: "Updated Equipment" };
    const action: EquipmentAction = {
      type: EquipmentActionTypes.UPDATE_EQUIPMENT,
      payload: updatedEquipment,
    };

    const newState = equipmentReducer(initialState, action);

    expect(newState.selectedEquipment).toEqual(updatedEquipment);
  });

  it("should return the initial state for an unknown action", () => {
    const initialState = {
      equipmentList: [],
    };

    const action: EquipmentAction = {
      type: "UNKNOWN_ACTION" as any,
    };

    const newState = equipmentReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
