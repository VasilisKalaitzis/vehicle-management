import ItemTile from "../common/ItemTile";
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEquipments } from '../../actions/equipmentActions';
import { useEffect } from "react";
import { Box } from "@mui/material";

const Equipment = () => {
  const dispatch = useDispatch();
  const { equipmentList } = useSelector<RootState, EquipmentState>((state) => state.equipment);
  const onClick = (id: string) => {

  };
  useEffect(() => {
    dispatch(fetchEquipments());
  }, [dispatch]);
  return (
    <Box display="flex" flexWrap="wrap">
      {equipmentList.map((equipment) => <ItemTile
        onClick={onClick}
        id={equipment.id}
        label={equipment.name}
        image={require("../../temp/default_image.png")}
      />)}
  </Box>
  );
};

export default Equipment;
