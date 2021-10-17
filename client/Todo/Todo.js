import React from "react";
import { Card, CardContent, Typography, Container } from "@material-ui/core";

const Todo = ({ todo, todoNo}) => {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {todoNo}) {todo}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;