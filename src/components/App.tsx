import React, { SyntheticEvent, useState } from 'react';
import Header from './header/Header';
import { Grid, Tabs, Tab, styled } from '@mui/material';
import { TOP_BAR_HEIGHT } from '../constants/App';
import TabPanel from './common/TabPanel';
import Vehicles from './vehicles/Vehicles';
import Equipment from './equipment/Equipment';

const MainBody = styled(Grid)({
  height: `calc(100vh - ${TOP_BAR_HEIGHT}px)`, // adjust this value to match your toolbar height
  overflow: 'auto',
  flexGrow: 1,
  marginTop: `${TOP_BAR_HEIGHT}px`,
  boxSizing: 'border-box',
});

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const warehouseCategories = [{id: 0, name: 'vehicles', component: <Vehicles/>}, {id: 1, name: 'equipment', component: <Equipment/>}];

  return (
    <>
      <Header/>
      <MainBody container>
        <Tabs
                orientation="vertical"
                value={activeTab}
                onChange={handleTabChange}
                aria-label="Warehouse categories"
                sx={{ borderRight: 1, borderColor: 'divider' }}>
                  {warehouseCategories.map((category) => <Tab tabIndex={category.id} label={category.name} id={`warehouse-category-${category.id}`} aria-controls={`warehouse-category-tabpanel-${category.id}`} />)}
        </Tabs>
        {warehouseCategories.map((category) => <TabPanel value={activeTab} index={category.id}>
          {category.component}
        </TabPanel>)}
      </MainBody>
    </>
  );
};

export default App;
