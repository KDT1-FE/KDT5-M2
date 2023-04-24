export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className="container max-w-7xl mx-auto grow">{children}</div>;
}
