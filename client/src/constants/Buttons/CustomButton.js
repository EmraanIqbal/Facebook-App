import { Box, Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  variant = "",
  size = "",
  disabled = "",
  buttonData = "",
  fullWidth = "",
  handleOnClick = () => {},
}) => {
  // console.log(color);
  return (
    <Box>
      <Button
        onClick={handleOnClick}
        variant={variant}
        size={size}
        disabled={disabled}
        fullWidth={fullWidth}
        // fontSize="900"
        // color={color}
        // color="success"
      >
        {buttonData}
      </Button>
    </Box>
  );
};

export default CustomButton;
