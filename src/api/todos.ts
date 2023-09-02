import type { TodoDTO } from "@/types";

import { api, API_ENDPOINT } from "./utils";

type GetTodoResponse = TodoDTO[];

export const todoAPI = {
  get: (page: number) =>
    api.get<GetTodoResponse>(`${API_ENDPOINT}/todos?_page=${page}`),
};
