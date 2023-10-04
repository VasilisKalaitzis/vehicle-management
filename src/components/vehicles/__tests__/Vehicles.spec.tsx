import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Vehicles from "../Vehicles";

describe("Vehicles", () => {
  it("should render VehicleForm when selectedVehicle exists", () => {
    const initialState = {
      vehicle: {
        vehicleList: [],
        selectedVehicle: { id: "vehicleId", name: "vehicleName" },
      },
      equipment: {
        equipmentList: [],
        selectedEquipment: undefined,
      },
    };
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <Vehicles />
      </Provider>,
    );

    const itemTileList = screen.queryByTestId("itemTileList");
    expect(itemTileList).toBeNull();
    const vehicleForm = screen.queryByTestId("vehicleForm");
    expect(vehicleForm).not.toBeNull();
  });

  it("should render ItemTileList when selectedVehicle does not exists", () => {
    const initialState = {
      vehicle: {
        vehicleList: [],
        selectedVehicle: undefined,
      },
      equipment: {
        equipmentList: [],
        selectedEquipment: undefined,
      },
    };
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <Vehicles />
      </Provider>,
    );

    const itemTileList = screen.queryByTestId("itemTileList");
    expect(itemTileList).not.toBeNull();
    const vehicleForm = screen.queryByTestId("vehicleForm");
    expect(vehicleForm).toBeNull();
  });
});
