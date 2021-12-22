import React from "react";
import { FormGroup, Input, Button } from "./FormElements";
const Form = ({ addNewTask,setIsFormVisible }) => {
  const [values, setValues] = React.useState({
    title: ' ',
  });
  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.title) {
      addNewTask(values.title);
    }
    setIsFormVisible()
  };
  
  return (
    <>
      <FormGroup onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Введите название задачи..."
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
