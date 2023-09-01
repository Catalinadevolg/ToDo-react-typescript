import { useState, useEffect } from "react";
import axios from "axios";

import { TodoList } from "@/components/TodoList";
import { addInfoToData } from "@/utils/addInfoToData";
import { StFlex } from "@/styles/global";
import { todoAPI } from "@/api/todos";
import type { TodoItemData } from "@/types";
import { StApp, StHead, StTypography, StIcon, StTasksCount } from "./styled";

function App() {
  const [todoList, settodoList] = useState<TodoItemData[] | null>(null);

  useEffect(() => {
    todoAPI.get().then(
      (response) => {
        const fullInfo = addInfoToData(response.data);

        settodoList(fullInfo);
      },
      (error) => {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      },
    );
  }, []);

  return (
    <StApp>
      <StHead $justifyContent={"space-between"}>
        <StTypography>Today</StTypography>
        <StFlex $gap={8}>
          <StIcon>
            <use href="/sprite.svg#add-task"></use>
          </StIcon>
          <StTasksCount>{todoList ? todoList.length : 0}</StTasksCount>
        </StFlex>
      </StHead>
      <TodoList list={todoList || []} />
    </StApp>
  );
}

export default App;
