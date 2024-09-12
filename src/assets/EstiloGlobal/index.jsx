import { createGlobalStyle, keyframes } from "styled-components";
import RobotoThin from "../Fonts/Roboto/Roboto-Thin.ttf";
import PoppinsMedium from "../Fonts/Poppins/Poppins-Medium.ttf";
import PoppinsLight from "../Fonts/Poppins/Poppins-Light.ttf";
import PoppinsBold from "../Fonts/Poppins/Poppins-Bold.ttf";

const girar = keyframes`
  0%{ transform: rotate(0) }
  100%{ transform: rotate(360deg) }
`;

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
 
  @font-face {
    font-family: "PoppinsBold";
    src: local("PoppinsBold"), local("Roboto Bold"), url(${PoppinsBold});
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-transform: none;
    font-size: 14px;
    font-family: "PoppinsLight";
    font-style: none;
    text-decoration: none;
  }
  .strong{
    font-family: "PoppinsMedium";
  }
  .esconder{
    font-size: 1px;
    color: transparent;
    position: absolute;
    left: -999px;
  }

  .carregando{
    display: block;
    height: 30px;
    width: 30px;
    border: 3px solid #09B1D9;
    border-radius: 50%;
    border-bottom: 3px solid transparent;
    margin: 0 auto;
    animation: ${girar} 1s linear infinite;
  }
`;

export default EstiloGlobal;