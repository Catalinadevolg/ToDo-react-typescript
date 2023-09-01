import { FC } from "react";
import { styled } from "styled-components";

import { TodoItem } from "@/components/TodoItem";
import type { TodoItemData } from "@/types";
import { COLORS } from "@/styles/variables";

const StListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
`;

const StPlug = styled.p`
  margin: 20px auto 0;
  font-size: 1rem;
  line-height: 140%;
  font-weight: 600;
  color: ${COLORS.neuteral_black_primary};
`;

type TodoListProps = {
  list: TodoItemData[];
};

export const TodoList: FC<TodoListProps> = ({ list }) => (
  <StListContainer>
    {list.length ? (
      list.map(({ id, title, ...info }) => (
        <TodoItem key={`todo-${id}-${title}`} id={id} title={title} {...info} />
      ))
    ) : (
      <StPlug>Список пуст</StPlug>
    )}
  </StListContainer>
);
