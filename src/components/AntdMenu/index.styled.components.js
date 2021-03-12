import styled from "styled-components";
import Menu from "antd/lib/menu";
import Dropdown from "antd/lib/dropdown";
import { ThreeDotsIcon } from "assets";

const DropdownMenu = styled(Menu)`
  width: ${(props) => (props.width ? props.width : "100px")};
  li {
    border-bottom: 1px solid #e4e7eb !important;
  }
`;

const DropdownSelect = styled(Dropdown)``;

const MenuItem = styled(Menu.Item)`
  padding: 10px 12px !important;
  :last-child {
    color: ${(props) => props.lastOptionColored && "#d53355 !important"};
  }
`;

const MoreOptionsBox = styled(ThreeDotsIcon)`
  cursor: pointer;
  g g {
    fill: ${(props) => props.color && props.color} !important;
  }
`;

export { DropdownMenu, DropdownSelect, MenuItem, MoreOptionsBox };
