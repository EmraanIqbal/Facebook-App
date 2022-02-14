import {
  Container,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CustomField from "../../constants/InputFields/CustomField";
import HelpIcon from "@mui/icons-material/Help";
import CustomButton from "../../constants/Buttons/CustomButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "white",
  //   border: "2px solid #000",
  //   boxShadow:10,
  boxShadow: 24,
  borderRadius: 2,
};

const RegisterationModal = ({ open = "", onClose = "" }) => {
  const [signState, setSignState] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignState({ ...signState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(signState);
  };
  return (
    <Modal
      open={open}
      // onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box mb="7px" display="flex" justifyContent="space-between">
          <Container fixed>
            <Typography variant="h4" fontWeight="700">
              Sign Up
            </Typography>
            <Typography color="#6067700">It's quick and easy.</Typography>
          </Container>
          <Box m="15px" onClick={onClose} pointer="cor">
            <CloseIcon fontSize="medium" />
          </Box>
        </Box>
        <Divider />
        <Container fixed>
          <Stack spacing={1}>
            <Box
              mt="15px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={1}>
                <CustomField
                  type="text"
                  placeholder="First Name"
                  size="small"
                  value={signState.firstName}
                  name="firstName"
                  handleChange={(e) => handleChange(e)}
                />
                <CustomField
                  type="text"
                  placeholder="Last Name"
                  size="small"
                  value={signState.lastName}
                  name="lastName"
                  handleChange={(e) => handleChange(e)}
                />
              </Stack>
            </Box>

            <CustomField
              type="text"
              placeholder="Mobile number or email address"
              size="small"
              value={signState.mobileNumber}
              name="mobileNumber"
              handleChange={(e) => handleChange(e)}
            />
            <CustomField
              type="text"
              placeholder="New Password"
              size="small"
              value={signState.password}
              name="password"
              handleChange={(e) => handleChange(e)}
            />
            <Box>
              <Typography>
                Date of birth <HelpIcon fontSize="small" />
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <CustomField type="date" size="small" />
                <CustomField type="date" size="small" />
                <CustomField type="date" size="small" />
              </Stack>
            </Box>
            <Box>
              <Typography>
                Gender <HelpIcon fontSize="small" />
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <TextField type="checkBox" label="New Password" size="small" />
                <TextField type="checkBox" size="small" />
                <TextField type="checkBox" size="small" />
              </Stack>
            </Box>
            <Typography variant="p" fontSize="12px">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </Typography>
            <Box p="20px" textAlign="center">
              <CustomButton
                variant="contained"
                size="large"
                buttonData="Sign Up"
                fullWidth="fullWidth"
                type="submit"
                handleOnClick={handleSubmit}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Modal>
  );
};

export default RegisterationModal;
