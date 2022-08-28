import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "../recoil/textState";
import { charCountState } from "../recoil/textState";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const inputHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={inputHandler} />
      <br />
      Echo: {text}
    </div>
  );
};

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
export default CharacterCounter;
