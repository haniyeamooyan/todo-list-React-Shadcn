import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.tsx";
import { IStatus } from "../../context/TodosContext.tsx";

interface IComponentProp {
  onChange: (value: IStatus) => void;
  options: { status: string }[];
  defaultValue?: IStatus;
}

const MySelect = ({ onChange, options, defaultValue }: IComponentProp) => {
  return (
    <Select
      onValueChange={onChange}
      defaultValue={defaultValue || options[0].status}
    >
      <SelectTrigger className="w-[12rem]">
        <SelectValue placeholder="choose option" />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => (
          <SelectItem key={item.status} value={item.status}>
            {item.status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MySelect;
