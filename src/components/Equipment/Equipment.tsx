import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectEquipment,
  fetchEquipments,
  selectEquipment,
} from "../../actions/equipmentActions";
import ItemTileList from "../common/tiles/ItemTileList";
import EquipmentView from "./EquipmentView";
import { IMPORT_TYPE_VALUES, NEW_ITEM_TEMP_ID } from "../../constants/item";
import { useEffect } from "react";

const Equipment = () => {
  const dispatch = useDispatch();
  const { equipmentList, selectedEquipment } = useSelector<
    RootState,
    EquipmentState
  >((state) => state.equipment);

  useEffect(() => {
    return () => {
      dispatch(deselectEquipment());
    };
  }, [dispatch]);

  // View equipment data
  const handleClickOnEquipment = (id: Id) => dispatch(selectEquipment(id));

  // handle import new equipments
  const handleImport = (option: ImportType) => {
    if (option === IMPORT_TYPE_VALUES.MANUAL) {
      dispatch(selectEquipment(NEW_ITEM_TEMP_ID));
    }
  };

  return selectedEquipment === undefined ? (
    <ItemTileList
      title="Equipment"
      itemList={equipmentList}
      onFetchItems={fetchEquipments}
      onItemClick={handleClickOnEquipment}
      onImport={handleImport}
    />
  ) : (
    <EquipmentView />
  );
};

export default Equipment;
