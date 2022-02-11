import { Input, TextField } from "@mui/material";
import React from "react";

const CustomField = ({
  type = "",
  placeholder = "",
  size = "",
  label = "",
}) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      fullWidth
      size={size}
      label={label}
    />
  );
};

export default CustomField;
