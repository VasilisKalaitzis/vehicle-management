import ItemTile from "../common/ItemTile";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { fetchEquipments } from "../../actions/equipmentActions";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ActionTile from "../common/ActionTile";
import { Add } from "@mui/icons-material";
import Searchbar from "../common/Searchbar";

const Equipment = () => {
  const dispatch = useDispatch();
  const { equipmentList } = useSelector<RootState, EquipmentState>(
    (state) => state.equipment,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const onClick = (id: string) => {};
  const handleAddEquipment = () => {};
  useEffect(() => {
    dispatch(fetchEquipments(searchQuery));
  }, [dispatch, searchQuery]);
  return (
    <Box width="100%">
      <Box p="8px 16px">
        {" "}
        <Searchbar onChange={setSearchQuery} />{" "}
      </Box>
      <Box display="flex" flexWrap="wrap">
        {equipmentList.map((equipment) => (
          <ItemTile
            key={`vehicle-list-key${equipment.id}`}
            onClick={onClick}
            id={equipment.id}
            label={equipment.name}
            image={require("../../temp/default_image.png")}
          />
        ))}
        <ActionTile
          label="Add Equipment"
          icon={<Add fontSize="large" />}
          id="addEquipment"
          onClick={handleAddEquipment}
        />
      </Box>
    </Box>
  );
};

export default Equipment;
