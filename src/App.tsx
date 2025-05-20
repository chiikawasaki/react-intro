import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import "./App.css";
import { useState } from "react";
import Header from "./Header";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };

  return (
    <>
      <Header />
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Box display={"flex"} alignItems={"center"} my={6}>
          <TextField
            id="standard-basic"
            label="Todo"
            variant="standard"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddTodo}>
            追加
          </Button>
        </Box>
        {todoList.map((todo, index) => (
          <FormControlLabel control={<Checkbox />} label={todo} key={index} />
        ))}
      </Box>
    </>
  );
}

export default App;
