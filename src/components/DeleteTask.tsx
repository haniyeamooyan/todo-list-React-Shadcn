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
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { TodosContext } from "../context/TodosContext.tsx";

interface IComponentProp {
  id?: number;
}
const DeleteTask = ({ id }: IComponentProp) => {
  const { deleteTodo } = useContext(TodosContext);
  const handleDelete = () => {
    if (id) {
      deleteTodo(id);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <MdDeleteOutline />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogDescription>Are you sure?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button id="delete" type="submit" onClick={handleDelete}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTask;
