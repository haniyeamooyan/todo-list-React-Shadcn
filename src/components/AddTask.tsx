import { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog.tsx";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { IoMdAdd } from "react-icons/io";
import MySelect from "./element/MySelect.tsx";
import { TItem, TodosContext } from "../context/TodosContext.tsx";

const AddTask = () => {
  const [data, setData] = useState<TItem>({ status: "High", done: false });
  const { addTodo } = useContext(TodosContext);

  const handleChange = (key: keyof TItem, value: string) => {
    setData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = () => {
    addTodo({ ...data, id: Date.now() });
    setData({ status: "High", done: false });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IoMdAdd />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Please enter title task and choose status for it
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              className="col-span-3"
              onChange={(event) => {
                handleChange("title", event.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <MySelect
              id="status"
              className="col-span-3"
              options={[
                { status: "High" },
                { status: "Medium" },
                { status: "Low" },
              ]}
              onChange={(value) => {
                handleChange("status", value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              id="submit"
              type="submit"
              disabled={!data.title}
              onClick={handleSubmit}
            >
              Save task
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;