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

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={6}
      >
        <Box my={6}>
          <TextField
            id="standard-basic"
            label="ToDo入力"
            variant="standard"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddTodo}>
            追加
          </Button>
        </Box>
        <FormGroup>
          {todoList.map((todo, index) => (
            <FormControlLabel key={index} control={<Checkbox />} label={todo} />
          ))}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="todo"
          />
        </FormGroup>
      </Box>
    </Box>
  );
}

export default App;
