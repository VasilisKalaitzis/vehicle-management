import {
  addEquipments,
  updateEquipment,
  getEquipments,
  getEquipmentById,
} from "../equipmentApis";
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

describe("equipment-apis", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

  // Clear localStorage after each test
  afterEach(() => {
    localStorageMock.clear();
  });
  it("should add equipments without ID to localStorage", () => {
    const newEquipment = { name: "Equipment 1" };

    // Mock the behavior of generateUniqueId
    (generateUniqueId as any).mockReturnValue("uniqueId123");

    addEquipments([newEquipment]);

    const localStorageData = localStorage.getItem("equipments");
    expect(localStorageData).toBeDefined();

    const equipmentList = localStorageData && JSON.parse(localStorageData);
    expect(equipmentList).toHaveLength(1);
    expect(equipmentList[0]).toEqual({
      id: "uniqueId123",
      name: "Equipment 1",
    });
  });

  it("should add equipments with existing ID to localStorage", () => {
    const newEquipment = { id: "1", name: "Equipment 1" };

    // Mock the behavior of generateUniqueId
    (generateUniqueId as any).mockReturnValue("uniqueId123");

    addEquipments([newEquipment]);

    const localStorageData = localStorage.getItem("equipments");
    expect(localStorageData).toBeDefined();

    const equipmentList = localStorageData && JSON.parse(localStorageData);
    expect(equipmentList).toHaveLength(1);
    expect(equipmentList[0]).toEqual({ id: "1", name: "Equipment 1" });
  });

  it("should update equipment in localStorage", () => {
    const existingEquipment = { id: "1", name: "Equipment 1" };

    // Set up an initial equipment in localStorage
    localStorage.setItem("equipments", JSON.stringify([existingEquipment]));

    const updatedEquipment = { id: "1", name: "Updated Equipment" };

    updateEquipment(updatedEquipment);

    const localStorageData = localStorage.getItem("equipments");
    expect(localStorageData).toBeDefined();

    const equipmentList = localStorageData && JSON.parse(localStorageData);
    expect(equipmentList).toHaveLength(1);
    expect(equipmentList[0]).toEqual({ id: "1", name: "Updated Equipment" });
  });

  it("should get equipments from localStorage", () => {
    const equipmentList = [
      { id: "1", name: "Equipment 1" },
      { id: "2", name: "Equipment 2" },
    ];

    localStorage.setItem("equipments", JSON.stringify(equipmentList));

    const retrievedEquipments = getEquipments();

    expect(retrievedEquipments).toHaveLength(2);
    expect(retrievedEquipments[0]).toEqual({ id: "1", name: "Equipment 1" });
    expect(retrievedEquipments[1]).toEqual({ id: "2", name: "Equipment 2" });
  });

  it("should get equipment by id from localStorage", () => {
    const equipmentList = [
      { id: "1", name: "Equipment 1" },
      { id: "2", name: "Equipment 2" },
    ];

    localStorage.setItem("equipments", JSON.stringify(equipmentList));

    const retrievedEquipment = getEquipmentById("2");

    expect(retrievedEquipment).toEqual({ id: "2", name: "Equipment 2" });
  });
});
