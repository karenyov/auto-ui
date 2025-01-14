type Props = {
  label?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Switch({ label, ...props }: Props) {
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input custom-switch"
          type="checkbox"
          role="switch"
          {...props}
        />

        {label && <label className="form-check-label">{label}</label>}
      </div>
    </>
  );
}
