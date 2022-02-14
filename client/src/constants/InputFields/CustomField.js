import { Input, TextField } from "@mui/material";
import React from "react";

const CustomField = ({
  type = "",
  placeholder = "",
  size = "",
  label = "",
  value = "",
  handleChange = () => {},
  name = "",
}) => {
  return (
    <TextField
      onChange={handleChange}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      fullWidth
      size={size}
      label={label}
    />
  );
};

export default CustomField;
