import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { fetchEquipments } from "../../actions/equipmentActions";
import ItemTileList from "../common/ItemTileList";

const Equipments = () => {
  const { equipmentList } = useSelector<RootState, EquipmentState>(
    (state) => state.equipment,
  );
  // View equipment data
  const handleClickOnEquipment = (id: string) => {};

  // handle import new equipments
  const handleImport = () => {};

  return (
    <ItemTileList
      itemList={equipmentList}
      fetchItems={fetchEquipments}
      onItemClick={handleClickOnEquipment}
      onImport={handleImport}
    />
  );
};

export default Equipments;
