import { Box } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// this component represents the tab panel used by Material UI Tabs component
const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: "inherit" }}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
