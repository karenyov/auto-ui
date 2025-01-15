import { ThemeSwitch } from "../../components/ThemeSwitch";

type Props = {
  children: React.ReactNode;
};

export function TemplateBase({ children }: Props) {
  return (
    <div className="template-base">
      <header className="d-flex justify-content-end align-items-center p-4">
        <ThemeSwitch />
      </header>
      <main>{children}</main>
    </div>
  );
}
