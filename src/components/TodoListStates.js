import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil/todoListState";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>오늘의 미션: {totalNum}개</li>
      <li>완료: {totalCompletedNum}개</li>
      <li>미완료: {totalUncompletedNum}개</li>
      <li>완료 퍼센트: {formattedPercentCompleted}%</li>
    </ul>
  );
};
export default TodoListStats;
