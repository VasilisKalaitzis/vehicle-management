import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ActionTile from "./ActionTile";
import ItemTile from "./ItemTile";
import Searchbar from "../Searchbar";
import ImportDialog from "../ImportDialog";

interface Props {
  itemList: { id: string; name: string }[];
  onFetchItems: (searchQuery?: string) => AnyAction;
  onItemClick: (id: string) => void;
  onImport: (option: ImportType) => void;
  title: string;
}

// This component represent the list of the item tiles (such as the equipments and vehicles)
const ItemTileList = ({
  itemList,
  onItemClick,
  onFetchItems,
  onImport,
  title,
}: Props) => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch items (e.g vehicle, equipments)
  useEffect(() => {
    dispatch(onFetchItems(searchQuery));
  }, [dispatch, onFetchItems, searchQuery]);

  const handleImport = (option: ImportType) => {
    onImport(option);
    setDialogOpen(false);
  };

  return (
    <Box width="100%">
      <Box p="8px 16px" display="flex">
        <Typography variant="h4" pr="16px">
          {title}
        </Typography>
        <Box display="flex" flexGrow={1} justifyContent="end">
          <Searchbar onChange={setSearchQuery} />
        </Box>
      </Box>

      <Box display="flex" flexWrap="wrap">
        {itemList.map((item) => (
          <ItemTile
            key={`vehicle-list-key${item.id}`}
            onClick={() => onItemClick(item.id)}
            id={item.id}
            label={item.name}
            image={require("../../../temp/default_image.png")}
          />
        ))}
        <ActionTile
          label="Add"
          icon={<Add fontSize="large" />}
          id="addButton"
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
