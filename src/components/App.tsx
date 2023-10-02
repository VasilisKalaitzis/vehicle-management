import React, { SyntheticEvent, useState } from "react";
import Header from "./Header/Header";
import { Grid, Tabs, Tab, styled } from "@mui/material";
import { TOP_BAR_HEIGHT } from "../constants/app-constants";
import TabPanel from "./common/TabPanel";
import Vehicles from "./Vehicles/Vehicles";
import Equipment from "./Equipments/Equipments";
import CommuteIcon from "@mui/icons-material/Commute";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const MainBody = styled(Grid)({
  height: `calc(100vh - ${TOP_BAR_HEIGHT}px)`, // adjust this value to match your toolbar height
  overflow: "hidden",
  flexGrow: 1,
  marginTop: `${TOP_BAR_HEIGHT}px`,
  boxSizing: "border-box",
  flexWrap: "nowrap",
});

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const warehouseCategories = [
    {
      id: 0,
      name: "vehicles",
      icon: <CommuteIcon fontSize="large" />,
      component: <Vehicles />,
    },
    {
      id: 1,
      name: "equipment",
      icon: <HomeRepairServiceIcon fontSize="large" />,
      component: <Equipment />,
    },
  ];

  return (
    <>
      <Header />
      <MainBody container>
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={handleTabChange}
          aria-label="warehouse categories"
          sx={{ borderRight: 1, borderColor: "divider", minWidth: "140px" }}
        >
          {warehouseCategories.map((category) => (
            <Tab
              key={`warehouse-category-tab-${category.id}`}
              disableRipple
              tabIndex={category.id}
              label={category.name}
              icon={category.icon}
              id={`warehouse-category-${category.id}`}
              aria-controls={`warehouse-category-tabpanel-${category.id}`}
              sx={{ p: "24px 16px" }}
            />
          ))}
        </Tabs>
        {warehouseCategories.map((category) => (
          <TabPanel
            key={`warehouse-category-tab-panel-${category.id}`}
            value={activeTab}
            index={category.id}
          >
            {category.component}
          </TabPanel>
        ))}
      </MainBody>
    </>
  );
};

export default App;
