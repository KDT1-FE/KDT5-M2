type Props = {
  name: string;
  onClick: () => void;
  active?: boolean;
};

export default function Button({ name, onClick, active }: Props): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`transition font-bold py-2 px-3 hover:opacity-80 hover:bg-amber-400 hover:text-black rounded-md text-amber-400 ${
        active ? 'bg-amber-400 rounded-md text-black font-bold' : ''
      }`}
    >
      {name}
    </button>
  );
}
