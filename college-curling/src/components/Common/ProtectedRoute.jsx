import React                 from "react";
import { Route, useHistory } from "react-router-dom";
import { useRecoilValue }    from "recoil";
import { isLoggedIn }        from "../../atoms/loginUser";

import Button     from '@mui/material/Button';
import Box        from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container  from '@mui/material/Container';
import Stack      from '@mui/material/Stack';

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const isSignedIn = useRecoilValue(isLoggedIn);
  const goBackHandler = () => {
    history.goBack();
  };
  console.log(rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  return (
    <React.Fragment>
      {isSignedIn ? (
        <Route path={rest.path} component={Component} />
      ) : (
        <Container component="main" maxWidth="sm">
            <Stack 
                sx={{
                    marginTop: '40px',
                    width: '100%',
                    alignItems: 'center',
                }}
                spacing={2}
            >
                <Typography component="h1" variant="h3">
                    Unauthorized!
                </Typography> 
                <Box sx={{marginTop: '30px'}}>
                    <Button
                        fullWidth
                        variant="contained" 
                        onClick={goBackHandler}
                    >
                        Go Back
                    </Button>
                </Box>
            </Stack>
        </Container>
      )}
    </React.Fragment>
  );
};

export default ProtectedRoute;