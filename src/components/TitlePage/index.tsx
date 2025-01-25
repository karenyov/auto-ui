type Props = {
  title: string;
  buttons?: React.ReactNode;
};

export function TitlePage({ title, buttons }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
      <h4 className="mt-4 mb-4">{title}</h4>
      <div>{buttons}</div>
    </div>
  );
}
