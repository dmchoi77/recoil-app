import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";
/**
 * recoil 상태를 사용하는 컴포넌트는 RecoilRoot가 필요함
 * Root Component인 App에 넣는 것이 적절
 */
function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
