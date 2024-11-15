import { useContext, useMemo } from "react";
import { IStatus, TodosContext } from "../context/TodosContext.tsx";
import ItemTodo from "./ItemTodo.tsx";
import { Player } from "@lottiefiles/react-lottie-player";

interface IComponentProps {
  filterStatus: IStatus;
}

const ListTodo = ({ filterStatus }: IComponentProps) => {
  const { items } = useContext(TodosContext);

  const filterData = useMemo(() => {
    if (filterStatus === "All") {
      return items;
    } else {
      return items.filter((_item) => _item.status === filterStatus);
    }
  }, [items, filterStatus]);

  return (
    <div
      className={
        "w-full flex flex-col p-1.5 border-2 border-gray-100 rounded-md bg-blue-50"
      }
    >
      {filterData.length > 0 ? (
        filterData.map((todo) => <ItemTodo item={todo} />)
      ) : (
        <Player
          src="https://lottie.host/8ccc54de-391c-4050-a012-496c0abd7aa2/2miP7nKe9f.json"
          className={"player h-80"}
          loop
          autoplay
        />
      )}
    </div>
  );
};

export default ListTodo;
