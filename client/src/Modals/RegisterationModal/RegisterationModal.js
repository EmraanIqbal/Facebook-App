import { Container, Divider, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomField from "../../constants/InputFields/CustomField";
import HelpIcon from "@mui/icons-material/Help";

const style = {
  position: "absolute",
  top: "35%",
  left: "52%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "white",
  //   border: "2px solid #000",
  //   boxShadow:10,
  boxShadow: 24,
  borderRadius: 2,
};

const RegisterationModal = ({ open = "", onClose = "" }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container fixed>
          <Box mb="7px">
            <Typography variant="h4" fontWeight="700">
              Sign Up
            </Typography>
            <Typography color="#6067700">It's quick and easy.</Typography>
          </Box>
        </Container>
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
                />
                <CustomField type="text" placeholder="Last Name" size="small" />
              </Stack>
            </Box>

            <CustomField
              type="text"
              placeholder="Mobile number or email address"
              size="small"
            />
            <CustomField type="text" placeholder="New Password" size="small" />
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
                <CustomField
                  type="checkBox"
                  placeholder="New Password"
                  size="small"
                />
                <CustomField type="checkBox" size="small" />
                <CustomField type="checkBox" size="small" />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Modal>
  );
};

export default RegisterationModal;
