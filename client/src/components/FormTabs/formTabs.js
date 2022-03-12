import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from './tabPanel';
import PersonalForm from './forms/personalForm';
import BusinessForm from './forms/BusinessForm';
import ApplicationForm from './forms/ApplicationForm';


function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

export default function FormTabs(props) {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
               <Tab label="Personal" {...a11yProps(0)} sx={{ textTransform: 'capitalize' }} />
               <Tab label="Business" {...a11yProps(1)} sx={{ textTransform: 'capitalize' }} />
               <Tab label="Application" {...a11yProps(2)} sx={{ textTransform: 'capitalize' }} />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}  >
            <PersonalForm setValue={setValue} value={value} />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <BusinessForm setValue={setValue} value={value} />
         </TabPanel>
         <TabPanel value={value} index={2}>
            <ApplicationForm setValue={setValue} value={value} />
         </TabPanel>
      </Box>
   );
}
