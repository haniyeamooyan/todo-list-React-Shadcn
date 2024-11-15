import { useContext, useState } from "react";
import MySelect from "./components/element/MySelect.tsx";
import AddTask from "./components/AddTask.tsx";
import ListTodo from "./components/ListTodo.tsx";
import { IStatus, TodosContext } from "./context/TodosContext.tsx";
import { Button } from "./components/ui/button.tsx";

function App() {
  const [filterStatus, setFilterStatus] = useState<IStatus>("All");
  const { sumTodos, doneAllTodos } = useContext(TodosContext);
  const handleChangeStatus = (value) => {
    setFilterStatus(value);
  };

  return (
    <div className={"p-24 flex flex-col justify-center items-center"}>
      <p className={"font-bold text-blue-950 text-2xl"}>
        React with ShandCn todoList
      </p>

      <div className={"w-full my-2 flex flex-row justify-between"}>
        <AddTask />
        <MySelect
          onChange={handleChangeStatus}
          options={[
            { status: "All" },
            { status: "High" },
            { status: "Medium" },
            { status: "Low" },
          ]}
        />
      </div>

      <ListTodo filterStatus={filterStatus} />

      {sumTodos > 0 && (
        <div>
          <p>
            sum todos: <span>{sumTodos}</span>
          </p>
          {/*TODO : need to fix*/}
          {/*<Button variant={"outline"} onClick={doneAllTodos}>*/}
          {/*  done all task*/}
          {/*</Button>*/}
        </div>
      )}
    </div>
  );
}

export default App;
