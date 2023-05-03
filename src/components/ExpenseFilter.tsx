interface Prop {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Prop) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => {
          onSelectCategory(event.target.value);
        }}
      >
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilites">Utilites</option>
        <option value="Entertaintment">Entertaintment</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
