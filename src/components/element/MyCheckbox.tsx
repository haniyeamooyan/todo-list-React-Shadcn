import { Checkbox } from "../ui/checkbox.tsx";

interface IComponentProp {
  title?: string;
  defaultChecked?: boolean;
  onChange: () => void;
}

const MyCheckbox = ({ title, defaultChecked, onChange }: IComponentProp) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onClick={onChange}
        defaultChecked={defaultChecked || false}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
};

export default MyCheckbox;
