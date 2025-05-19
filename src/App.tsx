import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"} marginY={6}>
          <TextField
            id="standard-basic"
            label="TODOを入力"
            variant="standard"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddTodo}>
            追加
          </Button>
        </Box>
        {todoList.map((todo, index) => (
          <FormGroup>
            <FormControlLabel key={index} control={<Checkbox />} label={todo} />
          </FormGroup>
        ))}
      </Box>
    </>
  );
}

export default App;
