import React from "react";
import {
  DropdownMenu,
  DropdownSelect,
  MenuItem,
  MoreOptionsBox,
} from "./index.styled.components";

const MenuComponent = (props) => {
  const {
    id,
    width,
    dotsColor,
    data = [1, 2, 3],
    handleAction,
    lastOptionColored,
    placement = "bottomRight",
  } = props;
  const dropdownRenderer = () => {
    return (
      <DropdownSelect
        getPopupContainer={(trigger) => trigger.parentElement}
        overlay={getMenuItems()}
        placement={placement}
        arrow
        trigger={["click"]}
        // visible={true}
      >
        <MoreOptionsBox color={dotsColor} />
      </DropdownSelect>
    );
  };

  const getMenuItems = () => {
    return (
      <DropdownMenu width={width}>
        {data.map((item) => {
          return (
            <MenuItem
              onClick={() => handleAction(id, item.value)}
              value={item.value}
              lastOptionColored={lastOptionColored}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </DropdownMenu>
    );
  };

  return <React.Fragment>{dropdownRenderer()}</React.Fragment>;
};

export default MenuComponent;
