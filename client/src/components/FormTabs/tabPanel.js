import React from 'react'
import PropTypes from 'prop-types';
import { Box } from '@mui/material';


export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            sx={{
                flex: 1, display: { md: 'flex' },
                alignItems: { md: 'center' },
            }}
        >
            {value === index && (
                <Box sx={{
                    px: 2,
                    py: 4,
                    width: {md: '700px'},
                    minHeight: {md: '600px'}
                }}>
                    {children}
                </Box>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
