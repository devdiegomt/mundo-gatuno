import { InputProps } from "../../types/input/input";
import classes from "./Input.module.css";

export const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  label,
  labelClassName,
  className,
  labelHidden,
  onChange,
}) => {
  return (
    <>
      <label
        hidden={labelHidden}
        className={`${classes.label} ${labelClassName}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`${classes.input} ${className}`}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};
