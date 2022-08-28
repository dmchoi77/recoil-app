import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todoListState";
import { TextField, Button, Box } from "@mui/material";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue === "") return;

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChangeHandler = ({ target: { value } }) => {
    setInputValue(value);
  };

  const preeEnterKey = (event) => {
    if (event.key === "Enter") addItem();
  };

  return (
    <Box>
      <TextField
        value={inputValue}
        label="할 일 입력"
        onChange={onChangeHandler}
        onKeyPress={preeEnterKey}
      />
      <Button variant="contained" color="secondary" onClick={addItem}>
        일정 추가
      </Button>
    </Box>
  );
};

export default TodoItemCreator;

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}
