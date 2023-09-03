import { makeAutoObservable, runInAction } from "mobx";
import { AxiosError } from "axios";

import type { TodoItemData } from "@/types";
import { todoAPI } from "@/api/todos";
import { addInfoToData } from "@/utils";

class store {
  private _todoList: TodoItemData[] = [];
  private _isFetching = false;
  private _page = 1;
  private _totalTasksCount = 0;
  private _error = "";

  constructor() {
    makeAutoObservable(this);
  }

  public get todoList() {
    return this._todoList;
  }

  public get isFetching() {
    return this._isFetching;
  }

  public get totalTasksCount() {
    return this._totalTasksCount;
  }

  public get error() {
    return this._error;
  }

  public async getTodoList() {
    this._isFetching = true;

    try {
      const { data, headers } = await todoAPI.get(this._page);

      const fullInfo = addInfoToData(data);
      runInAction(() => {
        this._todoList = [...this._todoList, ...fullInfo];
        this._page++;
        this._totalTasksCount = headers["x-total-count"] as number;
      });
    } catch (error) {
      runInAction(() => {
        this._error =
          (error as AxiosError).message ?? "An unexpected error occurred";
      });
    } finally {
      runInAction(() => {
        this._isFetching = false;
      });
    }
  }
}

export default new store();
