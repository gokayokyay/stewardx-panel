import { useStore } from "effector-react";
import { useEffect } from "react";
import { getTasks } from "../api";
import Label from "../components/Label";
import TaskCard from "../components/TaskCard";
import { TaskStore, setTasks } from "../stores/TaskStore";

export default function TasksAll() {
  const tasks = useStore(TaskStore);
  useEffect(() => {
    getTasks().then(setTasks).catch(console.error);
  }, []);
  return (
    <div className="flex-1 p-4 pl-8 overflow-auto">
      <Label className="text-xl">
        All tasks
      </Label>
      <div className="flex mt-4 -m-4 flex-wrap overflow-x-hidden">
        {tasks.map(task => <TaskCard {...task} />)}
        {/* <TaskCard exec_count={1} updated_at={new Date()} next_exec={new Date()} task_name={'Stewardx Task'} />
        <TaskCard exec_count={1} updated_at={new Date()} next_exec={new Date()} task_name={'Stewardx Task'} />
        <TaskCard exec_count={1} updated_at={new Date()} next_exec={new Date()} task_name={'Stewardx Task'} />
        <TaskCard exec_count={1} updated_at={new Date()} next_exec={new Date()} task_name={'Stewardx Task'} /> */}
      </div>
    </div>
  )
}