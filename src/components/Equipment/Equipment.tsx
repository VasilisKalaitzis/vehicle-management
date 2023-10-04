import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
  addEquipments,
  deselectEquipment,
  fetchEquipments,
  selectEquipment,
} from "../../actions/equipment-actions";
import ItemTileList from "../common/tiles/ItemTileList";
import EquipmentForm from "./EquipmentForm";
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
  const handleClickOnEquipment = (id?: Id) =>
    dispatch(selectEquipment(id ?? NEW_ITEM_TEMP_ID));

  // handle import new equipments
  const handleImport = (option: ImportType, data?: Equipment[]) => {
    if (option === IMPORT_TYPE_VALUES.MANUAL) {
      dispatch(selectEquipment(NEW_ITEM_TEMP_ID));
    } else if (option === IMPORT_TYPE_VALUES.JSON && data) {
      dispatch(addEquipments(data));
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
    <EquipmentForm />
  );
};

export default Equipment;
