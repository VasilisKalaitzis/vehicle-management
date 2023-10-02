import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  id: Id;
  image?: string;
  label: string;
  onClick: (id: Id) => void;
}

// This component represent an Item Tile such as an Equipment or a Vehicle
const ItemTile = (props: Props) => {
  const { id, image, label, onClick } = props;

  return (
    <Button
      disableElevation
      sx={{
        height: "156px",
        width: "240px",
        display: "block",
        border: "1px solid black",
        p: 0,
        m: 2,
      }}
      onClick={() => onClick(id)}
    >
      <Box height="120px" width="100%">
        <img src={image} alt="" height="100%" width="100%" />
      </Box>
      <Box
        height="36px"
        width="100%"
        textAlign="left"
        borderTop="1px solid black"
      >
        <Typography lineHeight="20px" p="8px">
          {label}
        </Typography>
      </Box>
    </Button>
  );
};

export default ItemTile;
