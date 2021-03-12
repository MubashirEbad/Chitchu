import React from "react";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FormControl } from "./index.styled.components";
import Skeleton from "react-loading-skeleton";

const MaterialDropdown = (props) => {
  const {
    value = "",
    onOptionClick,
    disabled = false,
    width = "100%",
    height = "40px",
    loading = false,
    title = "Select",
    multiple = false,
    filterOptions = [],
    loadingHeight = 56,
    triggerOn = "click",
    defaultText = "Select Option",
  } = props;

  const handleOptionChange = (e) => {
    if (multiple) {
      const tempData = e.target.value.filter((item) => item !== "");
      onOptionClick(tempData);
    } else {
      if (e.target.value !== "") {
        onOptionClick(e.target.value);
      } else {
        onOptionClick(null);
      }
    }
  };

  const InputLabelComp = styled(InputLabel)`
    background: white;
    .Mui-focused {
      background: rgba(0, 0, 0, 0.05) !important;
    }
  `;

  return (
    <React.Fragment>
      {loading && <Skeleton height={56} width={"100%"} />}
      {!loading && (
        <FormControl
          variant="outlined"
          fullWidth
          width={width}
          height={height}
          disabled={disabled}
        >
          <InputLabelComp> {title} </InputLabelComp>
          <Select
            multiple={multiple}
            value={value}
            onChange={(e) => handleOptionChange(e)}
            label={title}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {filterOptions.map((item, index) => {
              return (
                <MenuItem value={item.value} id={item.id}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </React.Fragment>
  );
};

export default MaterialDropdown;
