import * as React from 'react';
import Box from '@mui/material/Box';
import FormTabs from '../components/FormTabs/formTabs';



export default function Home() {


   return (
      <Box sx={{
         minHeight: '100vh',
         display: {md: 'flex'},
         justifyContent: {md: 'center'},
         alignItems: {md: 'center'},

       }} >
         <Box sx={{ px: { sm: 0, md: 2, }, py:1 }} >
            <FormTabs />
         </Box>
      </Box>

   );
}
