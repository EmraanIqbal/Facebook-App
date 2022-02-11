import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../constants/Buttons/CustomButton";
import CustomField from "../../constants/InputFields/CustomField";
import "@fontsource/roboto/300.css";
import RegisterationModal from "../../Modals/RegisterationModal/RegisterationModal";

const LoginPage = () => {
  const [registerModal, setRegisterModal] = useState(false);

  const handleClose = () => {
    setRegisterModal(false);
  };

  const handleOnClick = () => {
    setRegisterModal(true);
  };
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="130px"
        >
          <Box
            width="45%"
            ml="90px"
            // alignItems="center"
            // justifyContent="center"
          >
            <Typography
              fontWeight="700"
              fontSize="60px"
              variant="h2"
              // component="h2"
              color="#1877F2"
            >
              facebook
            </Typography>
            <Typography variant="h4" fontSize="27px">
              Facebook helps you connect and share with the people in your life.
            </Typography>
          </Box>
          <Box
            width="400px"
            height="350px"
            bgcolor="#F0F2F5"
            mr="90px"
            boxShadow="5"
            borderRadius="5px"
          >
            <Box>
              <Box m="15px">
                <Stack spacing={2}>
                  <CustomField
                    type="text"
                    placeholder="Email address or phone number"
                    size="medium"
                  />
                  <CustomField
                    type="text"
                    placeholder="Password"
                    size="medium"
                  />

                  <CustomButton
                    variant="contained"
                    size="large"
                    buttonData="Log In"
                    fullWidth="fullWidth"
                  />
                </Stack>
                <Box m="15px" textAlign="center">
                  <Link href="#" underline="hover">
                    Forgotten password?
                  </Link>
                </Box>

                <Divider />
                <Box m="25px" textAlign="center">
                  <CustomButton
                    variant="contained"
                    size="large"
                    buttonData="Create New Account"
                    handleOnClick={handleOnClick}
                  />
                </Box>
              </Box>
            </Box>
            <Box m="50px 40px 40px 40px">
              <Typography variant="p" fontWeight="600">
                Create a Page{" "}
              </Typography>
              <Typography variant="p">
                for a celebrity, brand or business.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <RegisterationModal open={registerModal} onClose={handleClose} />
    </Box>
  );
};

export default LoginPage;
