import { faker } from "@faker-js/faker";

import type { TodoDTO, TodoItemData } from "@/types";

export const addInfoToData = (todoListData: TodoDTO[]): TodoItemData[] => {
  return todoListData.map((info) => {
    return {
      description: faker.lorem.lines({ min: 1, max: 3 }),
      startDate: new Date(),
      endDate: faker.date.soon({ days: 5 }),
      tegs: [faker.word.adjective(5), faker.word.adjective(8)],
      userAvatar: "/avatar.jpg",
      ...info,
    };
  });
};
