import { createGlobalStyle, styled, keyframes } from "styled-components";

import SegoeUI from "/SegoeUI.ttf";
import { resetDefaultStyles } from "./normalize";
import { COLORS } from "./variables";

export const GlobalStyles = createGlobalStyle`
  ${resetDefaultStyles};

  @font-face {
    font-family: Segoe UI;
    src: url(${SegoeUI}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: Segoe UI, Helvetica, Sans-Serif, serif;
  }
`;

type TFlex = {
  $flexDirection?: "column" | "row";
  $justifyContent?:
    | "center"
    | "left"
    | "right"
    | "end"
    | "start"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "inherit";
  $alignItems?: "center" | "flex-start" | "flex-end" | "inherit";
  $gap?: number;
  $flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
};

export const StFlex = styled.div<TFlex>((props: TFlex) => {
  const { $flexDirection, $justifyContent, $alignItems, $gap, $flexWrap } =
    props;

  return {
    display: "flex",
    flexDirection: $flexDirection || "row",
    justifyContent: $justifyContent || "unset",
    alignItems: $alignItems || "unset",
    gap: $gap ? `${$gap}px` : 0,
    flexWrap: $flexWrap ? `${$flexWrap}` : "nowrap",
  };
});

export const AnimSpinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StSpinner = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  > div {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 30px auto;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${COLORS.statuses_green};
    animation: ${AnimSpinner} 2s linear infinite;
  }

  > div::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${COLORS.statuses_green};
    animation: ${AnimSpinner} 3s linear infinite;
  }

  > div::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${COLORS.statuses_green};
    animation: ${AnimSpinner} 1.5s linear infinite;
  }
`;
