import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import {create} from "./api-todo";

const TodoForm = ({ makeTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const createTodo = (e) => {
    e.preventDefault();
    const todo = {
      text: text,
    }
    create(todo).then((data) => {
      console.log(data.message)
      if(!data.error){
        makeTodos(todo);
      }
      setText("");
    })

  } ;

  
  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={createTodo}>
          <FormControl fullWidth={true}>
            <TextField
              label="Stuff to do"
              onChange={handleChange}
              required={true}
              value={text}
            />
            <Button
              type = "submit"
              color="success"
              variant="contained"
            >
              <Add />
              Add item
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default TodoForm;