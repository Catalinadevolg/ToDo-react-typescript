export type TodoDTO = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoItemData = {
  startDate: Date;
  endDate: Date;
  description: string;
  tegs: [string, string];
  userAvatar: string;
} & TodoDTO;
