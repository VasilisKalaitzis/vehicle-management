import { Box, Button, Typography } from "@mui/material";

interface TabPanelProps {
  id: string;
  image?: string;
  label: string;
  onClick: (id: string) => void;
}

const ItemTile = (props: TabPanelProps) => {
  const { id, image, label, onClick } = props;

  return (
    <Button
      disableElevation
      disableRipple
      disableFocusRipple
      sx={{
        height: "auto",
        width: "240px",
        display: "block",
        border: "1px solid black",
        p: 0,
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
