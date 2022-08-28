import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStates";
import { filteredTodoListState } from "../recoil/todoListState";
import { List, styled } from "@mui/material";

const TodoListWrapper = styled(List)`
  width: 100%;
  max-width: 360px;
`;

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoItemCreator />
      <TodoListStats />
      <TodoListWrapper>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </TodoListWrapper>
    </>
  );
};
export default TodoList;
