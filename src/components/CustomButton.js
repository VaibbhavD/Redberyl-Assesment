import React from "react";
import { Button, Typography } from "@mui/material";

const CustomButton = ({
  label,
  variant = "primary",
  hasIcon = false,
  icon,
  onClick,
  sx = "",
}) => {

  const buttonStyles = {
    padding: "8px 16px",
    border: '1px solid',
    borderColor: variant === 'primary' ? 'lightgray' : 'blue',
    borderRadius: "8px",
    height: "max-content",
    cursor: "pointer",
    textTransform: 'none',
    ...sx,
  };

  return (
    <Button onClick={onClick} sx={buttonStyles} variant={variant}>
      {hasIcon && (
        <Typography sx={{ mr: 1 }}>{icon}</Typography>
      )}
      {label}
    </Button>
  );
};

export default CustomButton;
