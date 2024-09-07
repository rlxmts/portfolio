import { createGlobalStyle } from "styled-components";
import RobotoThin from "../Fonts/Roboto/Roboto-Thin.ttf";
import PoppinsMedium from "../Fonts/Poppins/Poppins-Medium.ttf";
import PoppinsLight from "../Fonts/Poppins/Poppins-Light.ttf";

const EstiloGlobal = createGlobalStyle`  

  @font-face {
    font-family: "RobotoThin";
    src: local("RobotoThin"), local("Roboto Thin"), url(${RobotoThin});
  }

  @font-face {
    font-family: "PoppinsLight";
    src: local("PoppinsLight"), local("Poppins Light"), url(${PoppinsLight});
  }

  @font-face {
    font-family: "PoppinsMedium";
    src: local("PoppinsMedium"), local("Roboto Medium"), url(${PoppinsMedium});
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-transform: none;
    font-size: 14px;
    font-family: "PoppinsLight";
    letter-spacing:1px;
    font-style: none;
    text-decoration: none;
  }
  .strong{
    font-family: "PoppinsMedium";
  }
`;

export default EstiloGlobal;