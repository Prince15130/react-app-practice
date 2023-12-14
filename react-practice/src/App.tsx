import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import { expensesData } from "./expense-tracker/components/data";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(expensesData);

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onAddExpense={(data) =>
            setExpenses([
              ...expenses,
              { ...data, id: `e-${expenses.length + 1}` },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedFilter={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
