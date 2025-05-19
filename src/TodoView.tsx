import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";

type TodoViewProps = {
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleAddTodo: () => void;
  todoList: Array<string>;
  setTodoList: () => void;
};
export const TodoView: React.FC<TodoViewProps> = ({
  newTodo,
  setNewTodo,
  handleAddTodo,
  todoList,
  setTodoList,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default TodoView;
