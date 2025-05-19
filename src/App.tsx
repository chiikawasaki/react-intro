import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./App.css";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import TodoView from "./TodoView";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };
  return (
    <Box>
      <Header />
      <TodoView
        todoList={todoList}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
        setTodoList={setTodoList}
      />
    </Box>
  );
}

export default App;
