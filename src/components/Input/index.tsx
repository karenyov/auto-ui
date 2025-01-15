type Props = {
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ placeholder, ...props }: Props) {
  return (
    <>
      <input
        className="form-control"
        type={props.type || "text"}
        placeholder={placeholder || ""}
        {...props}
      />
    </>
  );
}
