declare interface Vehicle {
  id: string;
  name: string;
  driver: string;
  status: string;
  fuelType: string;
  equipments: number[];
}

declare interface VehicleState {
  selectedVehicle?: Vehicle;
  vehicleList: Vehicle[];
};
