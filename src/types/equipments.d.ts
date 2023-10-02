declare interface Equipment {
  id: Id;
  name: string;
  image: string;
}

declare interface EquipmentState {
  selectedEquipment?: Equipment;
  equipmentList: Equipment[];
}
