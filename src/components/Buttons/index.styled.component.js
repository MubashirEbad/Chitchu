import styled from "styled-components";
import Spin from "antd/lib/spin";
import darken from "polished/lib/color/darken";

const Loader = styled(Spin)`
  margin-top: 5px !important;
  margin-left: 10px !important;
`;

const Button = styled.button`
  ${(props) => {
    const { marginTop, size, theme, textCase, disabled } = props;
    const { backgroundColor, paragraph } = theme;
    const bgColor = disabled ? props.theme.lightenGrey : backgroundColor;
    return `
            display: flex;
            align-items: center;
            color: white;
            align-self: flex-start
            margin-top: ${marginTop};
            padding: ${size === "small" ? "0 16px" : "0 24px"}
            background-color: ${bgColor} !important;
            outline: none;
            text-decoration: none;
            border: none;
            font-weight: 700;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            text-transform: uppercase;
            justify-content: center;
            height: ${
      size === "large" ? "48px" : size === "medium" ? "40px" : "36px"
      };
            min-width: 150px;
            font-family: ${paragraph.latoPara};
            font-size: ${paragraph.latoParaSize2};

            & div span * {
                background-color: black;
            }

            :hover {
                background: ${darken(0.1, bgColor)};
                box-shadow: 0px 2px 5px -1px ${bgColor};
            }

        `;
  }}
  @media(max-width: 500px) {
    width: 100px;
    padding: 0 5px;
    font-size: 13px;
    min-width: unset;
  }
`;

export { Loader, Button };
