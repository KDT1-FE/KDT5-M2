export default function Select({ category, values, onChange }) {
  return (
    <>
      <select name={category} id={category} onChange={onChange} className="btn">
        {values.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}
