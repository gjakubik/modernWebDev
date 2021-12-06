import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Box        from '@mui/material/Box';

function Title(props) {
  return (
    <Box sx={{
      width: '80%', 
      padding: 'auto', 
      margin: 'auto', 
      textAlign: 'center', 
      marginTop: '30px', 
      marginBottom: '20px'}}
      >
      <Typography component="h1" variant="h6" color="primary" gutterBottom>
        {props.children}
      </Typography>
    </Box>
  );
}

Title.propTypes = {
    children: PropTypes.node,
};

export default Title;