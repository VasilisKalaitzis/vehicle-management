import {
  addVehicles,
  updateVehicle,
  getVehicles,
  getVehicleById,
} from "../vehicle-apis";
import { generateUniqueId } from "../utils";

// Mock the localStorage object
const localStorageMock = (() => {
  let store: { [key: string]: any } = {};

  return {
    getItem: (key: string) => store[key],
    setItem: (key: string, value: any) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

// Mock the generateUniqueId utility
jest.mock("../utils", () => ({
  generateUniqueId: jest.fn(),
}));

describe("vehicle-apis", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

  // Clear localStorage after each test
  afterEach(() => {
    localStorageMock.clear();
    jest.resetAllMocks();
  });

  it("should add vehicles without ID to localStorage", () => {
    const newVehicle = { name: "Vehicle 1" };

    // Mock the behavior of generateUniqueId
    (generateUniqueId as any).mockReturnValue("uniqueId123");

    addVehicles([newVehicle]);

    const localStorageData = localStorage.getItem("vehicles");
    expect(localStorageData).toBeDefined();

    const vehicleList = localStorageData && JSON.parse(localStorageData);
    expect(vehicleList).toHaveLength(1);
    expect(vehicleList[0]).toEqual({ id: "uniqueId123", name: "Vehicle 1" });
  });

  it("should add vehicles with existing ID to localStorage", () => {
    const newVehicle = { id: "1", name: "Vehicle 1" };

    // Mock the behavior of generateUniqueId
    (generateUniqueId as any).mockReturnValue("uniqueId123");

    addVehicles([newVehicle]);

    const localStorageData = localStorage.getItem("vehicles");
    expect(localStorageData).toBeDefined();

    const vehicleList = localStorageData && JSON.parse(localStorageData);
    expect(vehicleList).toHaveLength(1);
    expect(vehicleList[0]).toEqual({ id: "1", name: "Vehicle 1" });
  });

  it("should update vehicle in localStorage", () => {
    const existingVehicle = { id: "1", name: "Vehicle 1" };

    // Set up an initial vehicle in localStorage
    localStorage.setItem("vehicles", JSON.stringify([existingVehicle]));

    const updatedVehicle = { id: "1", name: "Updated Vehicle" };

    updateVehicle(updatedVehicle);

    const localStorageData = localStorage.getItem("vehicles");
    expect(localStorageData).toBeDefined();

    const vehicleList = localStorageData && JSON.parse(localStorageData);
    expect(vehicleList).toHaveLength(1);
    expect(vehicleList[0]).toEqual({ id: "1", name: "Updated Vehicle" });
  });

  it("should get vehicles from localStorage", () => {
    const vehicleList = [
      { id: "1", name: "Vehicle 1" },
      { id: "2", name: "Vehicle 2" },
    ];

    localStorage.setItem("vehicles", JSON.stringify(vehicleList));

    const retrievedVehicles = getVehicles();

    expect(retrievedVehicles).toHaveLength(2);
    expect(retrievedVehicles[0]).toEqual({ id: "1", name: "Vehicle 1" });
    expect(retrievedVehicles[1]).toEqual({ id: "2", name: "Vehicle 2" });
  });

  it("should get vehicle by id from localStorage", () => {
    const vehicleList = [
      { id: "1", name: "Vehicle 1" },
      { id: "2", name: "Vehicle 2" },
    ];

    localStorage.setItem("vehicles", JSON.stringify(vehicleList));

    const retrievedVehicle = getVehicleById("2");

    expect(retrievedVehicle).toEqual({ id: "2", name: "Vehicle 2" });
  });
});
