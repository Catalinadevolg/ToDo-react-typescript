import { styled } from "styled-components";

import { COLORS } from "@/styles/variables";

export const StCheckboxContainer = styled.div`
  position: relative;
  align-self: flex-start;

  > input {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid ${COLORS.neuteral_gray_background};
    opacity: 0;
    z-index: 0;
  }

  > label {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 55px;
    font-size: 1.166rem;
    line-height: 130%;
    font-weight: 600;
    color: ${COLORS.primary_blue};
    cursor: pointer;
    text-indent: 24px;
  }
`;

export const StIcon = styled.svg`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 2px;
  z-index: 1;
  cursor: pointer;
`;
