import { useState, useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import { Observer } from "mobx-react-lite";

import { TodoList } from "@/components/TodoList";
import { StFlex, StSpinner } from "@/styles/global";
import store from "@/store/store";

import {
  StApp,
  StHead,
  StTypography,
  StIcon,
  StTasksCount,
  StObserverTarget,
  StLoader,
  StError,
} from "./styled";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (
      !entry ||
      (store.totalTasksCount && store.todoList.length >= store.totalTasksCount)
    )
      return;

    if (entry.isIntersecting && !store.isFetching) {
      store.getTodoList().catch((e) => console.log("error message: ", e));
    }
  }, [entry]);

  useEffect(() => {
    store
      .getTodoList()
      .then(() => setIsLoading(false))
      .catch((e) => console.log("error message: ", e));
  }, []);

  if (isLoading) {
    return (
      <StSpinner>
        <div></div>
      </StSpinner>
    );
  }

  return (
    <Observer>
      {() => {
        return (
          <StApp ref={containerRef}>
            <StHead $justifyContent={"space-between"}>
              <StTypography>Today</StTypography>
              <StFlex $gap={8}>
                <StIcon>
                  <use href="/sprite.svg#add-task"></use>
                </StIcon>
                <StTasksCount>{store.todoList.length}</StTasksCount>
              </StFlex>
            </StHead>
            <TodoList list={store.todoList}>
              <StObserverTarget ref={ref} />
            </TodoList>
            {store.isFetching && <StLoader>Loading...</StLoader>}
            {store.error && <StError>{store.error}</StError>}
          </StApp>
        );
      }}
    </Observer>
  );
}

export default App;
