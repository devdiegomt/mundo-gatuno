export type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelHidden?: boolean;
  className?: string;
  labelClassName?: string;
};
