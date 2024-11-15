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
import { FaRegEdit } from "react-icons/fa";
import MySelect from "./element/MySelect.tsx";
import { TItem, TodosContext } from "../context/TodosContext.tsx";
import { useToast } from "../hooks/use-toast.ts";

interface IComponentProps {
  item: TItem;
}

const EditTask = ({ item }: IComponentProps) => {
  const [data, setData] = useState<TItem>(item);
  const { editTodo } = useContext(TodosContext);

  useEffect(() => {
    setData(item);
  }, [item]);

  const handleChange = (key: keyof TItem, value: string) => {
    setData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = () => {
    editTodo(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <FaRegEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            You Can edit your title and status of you task
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
              defaultValue={item.title}
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
              defaultValue={item.status}
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
              edit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
