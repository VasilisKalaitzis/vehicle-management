import React, { ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  id: string;
  icon?: ReactElement;
  label: string;
  onClick: (id?: string) => void;
}

const ActionTile = (props: Props) => {
  const { id, icon, label, onClick } = props;

  return (
    <Button
      disableElevation
      disableFocusRipple
      data-testid="action-tile"
      sx={(theme) => ({
        height: "156px",
        width: "240px",
        display: "block",
        border: "1px solid black",
        p: 0,
        m: 2,
        backgroundColor: theme.palette.grey[50],
      })}
      onClick={() => onClick(id)}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
        width="100%"
      >
        <Box p="4px" color={(theme) => theme.palette.info.main}>
          {icon}
        </Box>
        <Typography>{label}</Typography>
      </Box>
    </Button>
  );
};

export default ActionTile;
