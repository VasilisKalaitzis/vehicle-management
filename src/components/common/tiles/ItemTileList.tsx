import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ActionTile from "./ActionTile";
import ItemTile from "./ItemTile";
import Searchbar from "../Searchbar";
import ImportDialog from "../ImportDialog";
import { TOP_BAR_HEIGHT } from "../../../constants/app-constants";

interface Props {
  itemList: { id?: Id; name?: string }[];
  onFetchItems: (searchQuery?: string) => AnyAction;
  onItemClick: (id?: Id) => void;
  onImport: (option: ImportType, data?: any) => void;
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

  const handleImport = (option: ImportType, data?: any) => {
    onImport(option, data);
    setDialogOpen(false);
  };

  return (
    <Box width="100%" height="inherit">
      <Box p="8px 16px" display="flex" height="38px">
        <Typography variant="h4" pr="16px">
          {title}
        </Typography>
        <Box display="flex" flexGrow={1} justifyContent="end">
          <Searchbar onChange={setSearchQuery} />
        </Box>
      </Box>
      <Box
        display="flex"
        alignContent="flex-start"
        flexWrap="wrap"
        overflow="auto"
        height="inherit"
        sx={{ height: `calc(100% - ${TOP_BAR_HEIGHT}px)` }}
      >
        <ActionTile
          label={`Add ${title}`}
          icon={<Add fontSize="large" />}
          id="addButton"
          onClick={() => setDialogOpen(true)}
        />
        {itemList.map((item) => (
          <ItemTile
            key={`vehicle-list-key${item.id}`}
            onClick={() => onItemClick(item?.id)}
            id={item?.id}
            label={item?.name}
            image={require("../../../temp/default_image.png")}
          />
        ))}
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
