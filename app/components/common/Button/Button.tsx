import { Button as ButtonProps } from "@/app/lib/types";

export const Button = ({ ...ButtonProps }: ButtonProps) => {
  return (
    <div className={`button ${ButtonProps.variant}`}>
      <a href={ButtonProps.link} className="href">
        {ButtonProps.label}
      </a>
    </div>
  );
};
