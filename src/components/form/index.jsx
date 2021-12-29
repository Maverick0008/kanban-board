import React from "react";
import { FormGroup, Input, Button } from "./FormElements";
const Form = ({ addNewTask, setIsFormVisible }) => {
  const [values, setValues] = React.useState({
    title: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;

    setValues({ ...values, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      addNewTask(values.title);
      setIsFormVisible();
    } else {
      alert("Prease, enter task name!");
    }
  };

  return (
    <>
      <FormGroup onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Enter task name..."
          type="text"
          id="taskTitle"
          value={values.title}
          onChange={handleChange}
        ></Input>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </>
  );
};

export default Form;
