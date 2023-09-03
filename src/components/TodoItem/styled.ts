import { styled, css } from "styled-components";

import { COLORS } from "@/styles/variables";

export const StWrapper = styled.div`
  padding: 4px;
  border-radius: 7px;
  background-color: #f4f8ff;
`;

export const StContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 7px;
  box-shadow:
    0px 1px 2px 0px #d0daeb,
    0px 0px 2px 0px #eef4fe;
  background-color: ${COLORS.neuteral_white};
`;

export const StDates = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.statuses_green};
  font-size: 1.083rem;
  line-height: 140%;
  font-weight: 600;
`;

export const StDescription = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.083rem;
  line-height: 140%;
  font-weight: 400;
  color: ${COLORS.neuteral_black_primary};
  overflow: hidden;
`;

export const StTags = styled.div`
  display: flex;
  gap: 4px;
`;

const StyledTag = css`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 600;
`;

export const StViolentTag = styled.div`
  ${StyledTag}
  padding: 1px 6px 2px 6px;
  border-radius: 4px;
  background-color: ${COLORS.statuses_entity_tag};
  color: ${COLORS.neuteral_white};
`;

export const StNeuteralTag = styled.div`
  ${StyledTag}
  padding: 1px 0 2px 6px;
  background-color: ${COLORS.neuteral_gray};
  border-radius: 4px 0px 0px 4px;
  color: ${COLORS.primary_gray_dark};
`;

export const StIcon = styled.svg`
  width: 12px;
  height: 20px;
`;

export const StAvatar = styled.div<AvatarProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $url }: AvatarProps) =>
    `center / cover no-repeat url(${$url})`};
  filter: grayscale(100%);
`;

type AvatarProps = {
  $url: string;
};
