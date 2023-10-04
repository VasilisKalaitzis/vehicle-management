import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Equipments from "../Equipment";

describe("Equipments", () => {
  it("should render EquipmentForm when selectedEquipment exists", () => {
    const initialState = {
      equipment: {
        equipmentList: [],
        selectedEquipment: { id: "equipmentId", name: "equipmentName" },
      },
    };
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <Equipments />
      </Provider>,
    );

    const itemTileList = screen.queryByTestId("itemTileList");
    expect(itemTileList).toBeNull();
    const equipmentForm = screen.queryByTestId("equipmentForm");
    expect(equipmentForm).not.toBeNull();
  });

  it("should render ItemTileList when selectedEquipment does not exists", () => {
    const initialState = {
      equipment: {
        equipmentList: [],
        selectedEquipment: undefined,
      },
    };
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <Equipments />
      </Provider>,
    );

    const itemTileList = screen.queryByTestId("itemTileList");
    expect(itemTileList).not.toBeNull();
    const equipmentForm = screen.queryByTestId("equipmentForm");
    expect(equipmentForm).toBeNull();
  });
});
