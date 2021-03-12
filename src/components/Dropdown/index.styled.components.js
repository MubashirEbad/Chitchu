import styled from "styled-components";
import Menu from "antd/lib/menu";
import Dropdown from "antd/lib/dropdown";
import Divider from "antd/lib/divider";
import DownOutlined from "@material-ui/icons/KeyboardArrowDown";
import { TickIcon, DropdownIcon } from "assets";

const FilterWrapper = styled.div`
  user-select: none;
  width: ${(props) => props.width};
`;

const PlaceHolder = styled.div`
  font-family: ${(props) => props.theme.heading.latoHeading};
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: ${(props) => props.height};
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.theme.grey};
  border: 1px solid #95a5b3;
  font-size: 16px;

  :hover {
    color: black;
    background-color: ${(props) => props.theme.bgGrey};
  }
`;

const PlaceHolderText = styled.p`
  font-family: ${(props) => props.theme.heading.latoHeading};
  margin: 0;
  font-size: 16px;
  color: ${(props) => props.theme.grey};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 3px;
`;

const OptionsMenu = styled(Menu)`
  box-shadow: 0 0 5px 0 rgba(31, 41, 51, 0.1) !important;
  border: 1px solid rgba(31, 41, 51, 0.1) !important;
  border-radius: 5px !important;
`;

const MenuItem = styled(Menu.Item)`
  ${(props) => {
    const background = (props) =>
      props.selected ? props.theme.bgGrey : "transparent";
    return `
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: ${props.theme.heading.latoHeading};
            color: ${props.selected ? "black" : props.theme.grey} !important;
            background-color: ${props.selected && props.bgGrey};
            padding: 10px 12px !important;
            font-size: 15px !important;
            border-top-right-radius: ${props.first && "4px"};
            border-top-left-radius: ${props.first && "4px"};
            border-bottom-left-radius: ${props.last && "4px"};
            border-bottom-right-radius: ${props.last && "4px"};
            opacity: ${props.disabled && "0.5"} !important;
            :hover {
                color: black;
                background-color: ${(props) => props.bgGrey};
            }

            ::first-letter {
              text-transform: uppercase;
            }
        `;
  }}
`;

const DownIcon = styled(DownOutlined)``;

const DropDownItem = styled(Dropdown)`
  // max-width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const OptionsDivider = styled(Divider)`
  margin: 0 !important;
`;

const DropdownIconImage = styled(DropdownIcon)``;
const TickIconImage = styled(TickIcon)``;

export {
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
};
