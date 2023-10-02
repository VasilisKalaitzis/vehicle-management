import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import ItemTile from "../common/ItemTile";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import ActionTile from "../common/ActionTile";
import Searchbar from "../common/Searchbar";
import ImportDialog from "../common/ImportDialog";
import { AnyAction } from "redux";

interface Props {
  itemList: { id: string; name: string }[];
  fetchItems: (searchQuery?: string) => AnyAction;
  onItemClick: (id: string) => void;
  onImport: (option: string) => void;
}

// This component represent the list of the item tiles (such as the equipments and vehicles)
const ItemTileList = ({
  itemList,
  onItemClick,
  fetchItems,
  onImport,
}: Props) => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch items (e.g vehicle, equipments)
  useEffect(() => {
    dispatch(fetchItems(searchQuery));
  }, [dispatch, fetchItems, searchQuery]);

  const handleImport = (option: string) => {
    onImport(option);
    setDialogOpen(false);
  };

  return (
    <Box width="100%">
      <Box p="8px 16px">
        <Searchbar onChange={setSearchQuery} />{" "}
      </Box>
      <Box display="flex" flexWrap="wrap">
        {itemList.map((item) => (
          <ItemTile
            key={`vehicle-list-key${item.id}`}
            onClick={() => onItemClick(item.id)}
            id={item.id}
            label={item.name}
            image={require("../../temp/default_image.png")}
          />
        ))}
        <ActionTile
          label="Add Vehicle"
          icon={<Add fontSize="large" />}
          id="addVehicle"
          onClick={() => setDialogOpen(true)}
        />
      </Box>
      <ImportDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onImport={handleImport}
      />
    </Box>
  );
};

export default ItemTileList;
