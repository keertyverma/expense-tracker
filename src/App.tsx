import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 2, category: "Utilites" },
    { id: 2, description: "cookies", amount: 4, category: "Utilites" },
    { id: 3, description: "carrot", amount: 2, category: "Utilites" },
    { id: 4, description: "noodle", amount: 6, category: "Utilites" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpense = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <h1 className="mb-5">Expense Tracker</h1>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        Filter By Category
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}
