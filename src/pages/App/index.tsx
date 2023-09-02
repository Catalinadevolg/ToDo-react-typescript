import { useState, useEffect, useRef, useCallback } from "react";
import { useIntersection } from "@mantine/hooks";
import axios from "axios";

import { TodoList } from "@/components/TodoList";
import { addInfoToData } from "@/utils/addInfoToData";
import { StFlex } from "@/styles/global";
import { todoAPI } from "@/api/todos";
import type { TodoItemData } from "@/types";
import {
  StApp,
  StHead,
  StTypography,
  StIcon,
  StTasksCount,
  StObserverTarget,
  StLoader,
} from "./styled";

function App() {
  const [todoList, setTodoList] = useState<TodoItemData[]>([]);
  const [totalTasksCount, setTotalTasksCount] = useState<number>(0);
  const [isTasksLoading, setIsTasksLoading] = useState(false);
  const [page, setPage] = useState<number>(1);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  const getTodoList = useCallback(async () => {
    setIsTasksLoading(true);

    try {
      const { data, headers } = await todoAPI.get(page);

      const fullInfo = addInfoToData(data);
      setTodoList((prevList) => [...prevList, ...fullInfo]);
      setPage((prevPage) => prevPage + 1);
      setTotalTasksCount(headers["x-total-count"] as number);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    } finally {
      setIsTasksLoading(false);
    }
  }, [page]);

  useEffect(() => {
    if (!entry || (totalTasksCount && todoList.length >= totalTasksCount))
      return;

    if (entry.isIntersecting && !isTasksLoading) {
      getTodoList().catch((e) => console.log("error message: ", e));
    }
  }, [entry]);

  return (
    <StApp ref={containerRef}>
      <StHead $justifyContent={"space-between"}>
        <StTypography>Today</StTypography>
        <StFlex $gap={8}>
          <StIcon>
            <use href="/sprite.svg#add-task"></use>
          </StIcon>
          <StTasksCount>{todoList ? todoList.length : 0}</StTasksCount>
        </StFlex>
      </StHead>
      <TodoList list={todoList}>
        <StObserverTarget ref={ref} />
      </TodoList>
      {isTasksLoading && <StLoader>Loading...</StLoader>}
    </StApp>
  );
}

export default App;
