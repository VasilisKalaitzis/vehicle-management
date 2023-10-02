import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { fetchEquipments } from "../../actions/equipmentActions";
import ItemTileList from "../common/tiles/ItemTileList";

const Equipments = () => {
  const { equipmentList } = useSelector<RootState, EquipmentState>(
    (state) => state.equipment,
  );
  // View equipment data
  const handleClickOnEquipment = (id: string) => {};

  // handle import new equipments
  const handleImport = (option: ImportType) => {};

  return (
    <ItemTileList
      title="Equipments"
      itemList={equipmentList}
      onFetchItems={fetchEquipments}
      onItemClick={handleClickOnEquipment}
      onImport={handleImport}
    />
  );
};

export default Equipments;
