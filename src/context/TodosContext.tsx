import { createContext, useState, ReactNode, useMemo } from "react";

export type IStatus = "All" | "High" | "Medium" | "Low";

export type TItem = {
  id?: number;
  title?: string;
  status: IStatus;
  done: boolean;
};

interface ITodosContext {
  items: TItem[];
  sumTodos: number;
  addTodo: (value: TItem) => void;
  editTodo: (value: TItem) => void;
  doneTodo: (value: TItem) => void;
  doneAllTodos: () => void;
  deleteTodo: (id: number) => void;
}

export const TodosContext = createContext<ITodosContext>({
  items: [],
  sumTodos: 0,
  addTodo: (value) => {},
  editTodo: (value) => {},
  doneTodo: (value) => {},
  doneAllTodos: () => {},
  deleteTodo: (id) => {},
});

export function TodosProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<TItem[]>([]);

  function addTodo(value: TItem): void {
    setData([...data, value]);
  }
  function deleteTodo(id: number): void {
    setData(data.filter((item) => item.id !== id));
  }

  function editTodo(value: TItem) {
    setData(
      data.map((item) =>
        item.id === value.id
          ? { ...item, title: value.title, status: value.status }
          : item,
      ),
    );
  }

  function doneTodo(value: TItem): void {
    setData(
      data.map((item) =>
        item.id === value.id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  function doneAllTodos(): void {
    setData(data.map((item) => ({ ...item, done: true })));
  }

  const sumTodos = useMemo(() => {
    return data.length;
  }, [data]);

  const contextValue: ITodosContext = {
    items: data,
    sumTodos,
    addTodo,
    editTodo,
    doneTodo,
    doneAllTodos,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
}
