import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  /* const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 }; */

  /* const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current) {
      person.name = nameRef.current?.value;
    }
    if (ageRef.current) {
      person.age = parseInt(ageRef.current?.value);
    }

    console.log(person);
  }; */

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name", { required: true, minLength: 4 })}
        />
      </div>
      {errors.name?.type === "required" && (
        <p className="text-danger">The name field is required</p>
      )}
      {errors.name?.type === "minLength" && (
        <p className="text-danger">The name must be at leasr 4 characters</p>
      )}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age")}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
