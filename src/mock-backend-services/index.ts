import { saveVehicles, getVehicleById, getVehicles } from "./vehicle-apis";
import {
  saveEquipments,
  getEquipmentById,
  getEquipments,
} from "./equipment-apis";

const backendApi = {
  saveVehicles,
  getVehicleById,
  getVehicles,
  saveEquipments,
  getEquipmentById,
  getEquipments,
};

export default backendApi;
