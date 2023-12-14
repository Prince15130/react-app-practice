interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0)
    return (
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <td className="fw-bold">Description</td>
            <td className="fw-bold">Amount</td>
            <td className="fw-bold">Category</td>
            <td className="fw-bold">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} className="text-success fw-bold">
              No expenses to show
            </td>
          </tr>
        </tbody>
      </table>
    );

  return (
    <table className="table table-bordered border-primary">
      <thead>
        <tr>
          <td className="fw-bold">Description</td>
          <td className="fw-bold">Amount</td>
          <td className="fw-bold">Category</td>
          <td className="fw-bold">Action</td>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
