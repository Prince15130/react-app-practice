import { categories } from "./data";

interface ExpenseFilterProps {
  onSelectedFilter: (selectedFilter: string) => void;
}

const ExpenseFilter = ({ onSelectedFilter }: ExpenseFilterProps) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectedFilter(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
