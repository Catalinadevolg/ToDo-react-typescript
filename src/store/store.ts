import { makeAutoObservable, runInAction } from "mobx";
import { AxiosError } from "axios";

import type { TodoItemData } from "@/types";
import { todoAPI } from "@/api/todos";
import { addInfoToData } from "@/utils";

class store {
  todoList: TodoItemData[] = [];
  isFetching = false;
  page = 1;
  totalTasksCount = 0;
  error = "";

  constructor() {
    makeAutoObservable(this);
  }

  async getTodoList() {
    this.isFetching = true;

    try {
      const { data, headers } = await todoAPI.get(this.page);

      const fullInfo = addInfoToData(data);
      runInAction(() => {
        this.todoList = [...this.todoList, ...fullInfo];
        this.page++;
        this.totalTasksCount = headers["x-total-count"] as number;
      });
    } catch (error) {
      runInAction(() => {
        this.error =
          (error as AxiosError).message ?? "An unexpected error occurred";
      });
    } finally {
      runInAction(() => {
        this.isFetching = false;
      });
    }
  }
}

export default new store();
