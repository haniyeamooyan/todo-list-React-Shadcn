import { useContext, useMemo } from "react";
import { Badge } from "./ui/badge.tsx";
import EditTask from "./EditTask.tsx";
import DeleteTask from "./DeleteTask.tsx";
import MyCheckbox from "./element/MyCheckbox.tsx";
import { TItem, TodosContext } from "../context/TodosContext.tsx";

interface IComponentProps {
  item: TItem;
}

const ItemTodo = ({ item }: IComponentProps) => {
  const { doneTodo } = useContext(TodosContext);

  const handleChangeItem = (item) => {
    doneTodo(item);
  };

  const statusColor = useMemo(() => {
    const colorMap: Record<string, string> = {
      High: "bg-red-400",
      Medium: "bg-yellow-400",
      Low: "bg-blue-400",
    };

    return colorMap[item.status] || "bg-gray-300";
  }, [item.status]);

  return (
    <div
      className={`flex flex-row m-1 p-3 border-2 border-gray-50 rounded-md ${item.done ? "bg-green-100" : "bg-white"}`}
    >
      <div className={"w-10/12 flex flex-row"}>
        <MyCheckbox
          title={item.title}
          defaultChecked={item.done}
          onChange={() => {
            handleChangeItem(item);
          }}
        />
      </div>

      <div className={"w-2/12 flex justify-around "}>
        <Badge className={` ${statusColor}`}>{item.status}</Badge>
        <EditTask item={item} />
        <DeleteTask id={item.id} />
      </div>
    </div>
  );
};

export default ItemTodo;
