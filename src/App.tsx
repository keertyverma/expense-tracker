import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 2, category: "Utilites" },
    { id: 2, description: "cookies", amount: 4, category: "Utilites" },
    { id: 3, description: "carrot", amount: 2, category: "Utilites" },
    { id: 4, description: "noodle", amount: 6, category: "Utilites" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}
