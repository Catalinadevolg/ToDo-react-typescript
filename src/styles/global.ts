import { createGlobalStyle, styled } from "styled-components";

import SegoeUI from "/SegoeUI.ttf";
import { resetDefaultStyles } from "./normalize";

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
