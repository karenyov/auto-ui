import React from "react";

type Props = {
  placeholder?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, error, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder={placeholder || ""}
          {...props}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
);
