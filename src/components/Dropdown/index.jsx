import React from "react";
import {
  DownIcon,
  MenuItem,
  PlaceHolder,
  OptionsMenu,
  DropDownItem,
  FilterWrapper,
  TickIconImage,
  OptionsDivider,
  PlaceHolderText,
  DropdownIconImage,
} from "./index.styled.components";
import Skeleton from "react-loading-skeleton";

const Dropdown = (props) => {
  const [selectedOption, setSelectedOption] = React.useState(props.title);
  const {
    value,
    height = "40px",
    width = "180px",
    title = "Select",
    defaultText = "Select Option",
    filterOptions = [],
    onOptionClick,
    triggerOn = "click",
    multiple = false,
    loading = false,
  } = props;

  const handleChange = (item) => {
    onOptionClick(item);
    setSelectedOption(item.value);
  };

  const menuOptions = () => {
    return (
      <OptionsMenu>
        {filterOptions.map((item, index) => {
          const { label, value } = item;
          const newLabel = `${label.charAt(0).toUpperCase()}${label.substr(
            1,
            label.length
          )}`;
          const key = `${item} - ${index}`;
          const selected = selectedOption === value;
          const last = index === filterOptions.length - 1;
          return (
            <React.Fragment>
              <MenuItem
                first={index === 0}
                key={key}
                value={value}
                selected={selected}
                onClick={() => handleChange(item)}
                last={last}
                disabled={item.disabled}
              >
                {newLabel} {selected && <TickIconImage />}
              </MenuItem>
              {!last && <OptionsDivider />}
            </React.Fragment>
          );
        })}
      </OptionsMenu>
    );
  };
  return (
    <React.Fragment>
      {loading && <Skeleton height={height} width={width} />}
      {!loading && (
        <FilterWrapper width={width}>
          <DropDownItem
            getPopupContainer={(trigger) => trigger.parentElement}
            overlay={menuOptions()}
            trigger={["click"]}
            width={width}
          >
            <PlaceHolder onClick={(e) => e.preventDefault()} height={height}>
              <PlaceHolderText>
                {" "}
                {(value && value.label) || title}{" "}
              </PlaceHolderText>
              <DropdownIconImage />
            </PlaceHolder>
          </DropDownItem>
        </FilterWrapper>
      )}
    </React.Fragment>
  );
};

export default Dropdown;
