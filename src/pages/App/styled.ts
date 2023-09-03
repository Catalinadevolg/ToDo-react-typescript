import { styled } from "styled-components";

import { StFlex } from "@/styles/global";
import { COLORS } from "@/styles/variables";

export const StApp = styled.div`
  width: 263px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 92px 0;
  margin: 0 auto;
`;

export const StHead = styled(StFlex)`
  padding: 0 4px;
`;

export const StTypography = styled.p`
  font-size: 1.166rem;
  line-height: 140%;
  font-weight: 600;
  color: ${COLORS.statuses_green};
`;

export const StIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const StTasksCount = styled.div`
  height: 20px;
  padding: 0 6px;
  border-radius: 4px;
  border: 1px solid ${COLORS.primary_gray_primary};
  font-size: 1rem;
  line-height: 140%;
  font-weight: 600;
  color: ${COLORS.neuteral_black_primary};
`;

export const StObserverTarget = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: 0;
  pointer-events: none;
`;

export const StLoader = styled.div`
  margin: 10px auto;
  color: ${COLORS.neuteral_black_primary};
`;

export const StError = styled.div`
  margin: 10px auto;
  color: ${COLORS.primary_blue};
`;
