interface Props {
  category: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ category, options, onChange }: Props) {
  return (
    <select
      name={category}
      id={category}
      className="border-2 border-gray-300 rounded-md p-2 focus:ring-4 focus:ring-amber-200"
      onChange={onChange}
    >
      {options.map((option: string) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
