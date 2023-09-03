import { FC, useState } from "react";

import { Checkbox } from "@/components/Checkbox";
import { ucFirst, convertDateToString } from "@/utils";
import { StFlex } from "@/styles/global";
import type { TodoItemData } from "@/types";

import {
  StWrapper,
  StContainer,
  StDates,
  StDescription,
  StTags,
  StViolentTag,
  StNeuteralTag,
  StAvatar,
  StIcon,
} from "./styled";

export const TodoItem: FC<TodoItemData> = ({
  id,
  title,
  completed,
  startDate,
  endDate,
  description,
  tegs,
  userAvatar,
}) => {
  const [checked, setChecked] = useState<boolean>(completed);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StWrapper>
      <StContainer>
        <Checkbox
          name={`${id}`}
          label={ucFirst(title)}
          isChecked={checked}
          handleChange={handleChange}
        />
        <StDates>
          <div>{convertDateToString(startDate)}</div>
          <div>{convertDateToString(endDate)}</div>
        </StDates>
        <StDescription>{ucFirst(description)}</StDescription>
        <StFlex $justifyContent="space-between" $alignItems="center">
          <StTags>
            <StViolentTag>{ucFirst(tegs[0])}</StViolentTag>
            <StFlex>
              <StNeuteralTag>{ucFirst(tegs[1])}</StNeuteralTag>
              <StIcon>
                <use href="/sprite.svg#tag-gray"></use>
              </StIcon>
            </StFlex>
          </StTags>
          <StAvatar $url={userAvatar} />
        </StFlex>
      </StContainer>
    </StWrapper>
  );
};
