import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import EquipmentForm from "../EquipmentForm";

describe("EquipmentForm", () => {
  let initialState: any;
  beforeEach(() => {
    initialState = {
      equipment: {
        equipmentList: [],
        selectedEquipment: {
          id: "v1",
          name: "AB23",
          driver: "SpongeBob SquarePants",
          status: "active",
          fuelType: "LNG",
          equipments: [1],
        },
      },
    };
  });
  it("should render all the input fields", () => {
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <EquipmentForm />
      </Provider>,
    );

    expect(
      screen.getByDisplayValue(initialState.equipment.selectedEquipment.id),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.equipment.selectedEquipment.name),
    ).not.toBeNull();
  });
});
