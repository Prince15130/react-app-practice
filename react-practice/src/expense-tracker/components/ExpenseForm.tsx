import { useForm } from "react-hook-form";
import { categories } from "./data";

interface ExpenseFormData {
  id: string;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseFormProps {
  onAddExpense: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="mt-3"
      onSubmit={handleSubmit((data) => {
        onAddExpense(data as ExpenseFormData);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description", { required: true, minLength: 4 })}
        />
      </div>
      {errors.description?.type === "required" && (
        <p className="text-danger">The description field is required</p>
      )}
      {errors.description?.type === "minLength" && (
        <p className="text-danger">
          The description must be at least 4 characters
        </p>
      )}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { required: true, valueAsNumber: true })}
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">The amount field is required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          className="form-select"
          {...register("category", { required: true })}
        >
          <option value=""></option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">The category field is required</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
