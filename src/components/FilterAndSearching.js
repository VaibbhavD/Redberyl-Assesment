import React from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";

const FilterAndSearching = ({
  searchValue,
  setSearchValue,
  selectedDomicile,
  setSelectedDomicile,
  selectedCompany,
  setSelectedCompany,
  selectedStatus,
  setSelectedStatus,
}) => {
  // Options for filters
  const CountryOptions = [
    { value: "All", label: "All" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
    { value: "India", label: "India" },
    { value: "Germany", label: "Germany" },
  ];

  const companyOptions = [
    { value: "All", label: "All" },
    { value: "TL Flex Holdings LLC", label: "TL Flex Holdings LLC" },
    { value: "TL Flex LLC", label: "TL Flex LLC" },
    { value: "SL Flex Holdings", label: "SL Flex Holdings" },
  ];

  const statusOptions = [
    { value: "All", label: "All" },
    { value: "InProgress", label: "In Progress" },
    { value: "Completed", label: "Completed" },
    { value: " Pending", label:  "Pending" },
    { value: "Approval Pending", label: "Approval Pending" },
    { value: "Draft", label: "Draft" },
    { value: "Review", label: "Review" },
  ];

  // Reset all filters to "All"
  const handleClearFilters = () => {
    setSearchValue("");
    setSelectedDomicile("All");
    setSelectedCompany("All");
    setSelectedStatus("All");
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        my: 2,
        alignItems: "center",
      }}
    >
      {/* Search Input */}
      <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        size="small"
        sx={{ minWidth: 180 }}
        InputLabelProps={{ shrink: true }}
      />

      {/* Domicile Filter */}
      <TextField
        select
        label="Domicile"
        value={selectedDomicile}
        onChange={(e) => setSelectedDomicile(e.target.value)}
        size="small"
        sx={{ minWidth: 180 }}
        InputLabelProps={{ shrink: true }}
      >
        {CountryOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Company Filter */}
      <TextField
        select
        label="Company"
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        size="small"
        sx={{ minWidth: 200 }}
        InputLabelProps={{ shrink: true }}
      >
        {companyOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Status Filter */}
      <TextField
        select
        label="Status"
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        size="small"
        sx={{ minWidth: 180 }}
        InputLabelProps={{ shrink: true }}
      >
        {statusOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Clear Filters Button */}
      <Button variant="outlined" onClick={handleClearFilters} size="small">
        Clear Filters
      </Button>
    </Box>
  );
};

export default FilterAndSearching;
