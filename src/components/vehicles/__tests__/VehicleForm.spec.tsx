import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import VehicleForm from "../VehicleForm";

describe("VehicleForm", () => {
  let initialState: any;
  beforeEach(() => {
    initialState = {
      vehicle: {
        vehicleList: [],
        selectedVehicle: {
          id: "v1",
          name: "AB23",
          driver: "SpongeBob SquarePants",
          status: "active",
          fuelType: "LNG",
          equipments: [1],
        },
      },
      equipment: {
        equipmentList: [
          {
            id: 1,
            name: "Crane",
          },
        ],
        selectedEquipment: undefined,
      },
    };
  });
  it("should render all the input fields", () => {
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <VehicleForm />
      </Provider>,
    );

    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.id),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.name),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.driver),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.fuelType),
    ).not.toBeNull();
    expect(
      screen.getByText(initialState.equipment.equipmentList[0].name),
    ).not.toBeNull();
  });

  it("should render multiple equipments", () => {
    initialState.vehicle.selectedVehicle.equipments[1] = 2;
    initialState.equipment.equipmentList[1] = {
      id: 2,
      name: "Tachograph",
    };
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <VehicleForm />
      </Provider>,
    );

    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.id),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.name),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.driver),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.fuelType),
    ).not.toBeNull();
    expect(
      screen.getByText(
        `${initialState.equipment.equipmentList[0].name}, ${initialState.equipment.equipmentList[1].name}`,
      ),
    ).not.toBeNull();
  });

  it("should render multiple equipments even if one does not exist", () => {
    initialState.vehicle.selectedVehicle.equipments[1] = 2;
    initialState.vehicle.selectedVehicle.equipments[2] = 100;
    initialState.equipment.equipmentList[1] = {
      id: 2,
      name: "Tachograph",
    };
    const store = configureMockStore();
    render(
      <Provider store={store(initialState)}>
        <VehicleForm />
      </Provider>,
    );

    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.id),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.name),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.driver),
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue(initialState.vehicle.selectedVehicle.fuelType),
    ).not.toBeNull();
    expect(
      screen.getByText(
        `${initialState.equipment.equipmentList[0].name}, ${initialState.equipment.equipmentList[1].name}`,
      ),
    ).not.toBeNull();
  });
});
