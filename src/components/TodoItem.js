import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoListState";
import { replaceItemAtIndex } from "../utils/replaceItemUtil";
import { removeItemAtIndex } from "../utils/removeItemUtil";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };
  return (
    <ListItem role={undefined} dense button onClick={toggleItemCompletion}>
      <ListItemIcon>
        <Checkbox edge="end" checked={item.isComplete} disableRipple />
      </ListItemIcon>
      <ListItemText primary={item.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={deleteItem}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
