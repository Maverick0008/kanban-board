import React from "react";
import { FormGroup, Input, Button,ListFocus } from "./FormElements";
const Form = ({ addNewTask, setIsFormVisible }) => {
  const [values, setValues] = React.useState({
    title: "",
  });
  const name = React.useRef('')
  const [isValid, setIsValid] = React.useState(true)
  const nameBlurData = (name) => {
    setIsValid(!!name);
  };
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
      nameBlurData()
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
          onBlur={() => nameBlurData(name.current.value)}
          ref={name}
          onChange={handleChange}
        ></Input>
        {!isValid && <ListFocus>Please enter the name of the task</ListFocus>}
        <Button type="submit">Submit</Button>
      </FormGroup>
    </>
  );
};

export default Form;
