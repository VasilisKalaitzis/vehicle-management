declare interface Equipment {
  id: string;
  name: string;
  image: string;
}

declare interface EquipmentState {
  selectedEquipment?: Equipment;
  equipmentList: Equipment[];
}
