import { useStore } from "effector-react"
import { useEffect } from "react";
import ActiveTaskCard from "../components/ActiveTaskCard";
import Label from "../components/Label";
import { ActiveTaskStore, setActiveTasks, setActiveTasksLoaded } from "../stores/ActiveTaskStore";

export default function Dashboard() {
  const { tasks } = useStore(ActiveTaskStore);
  return (
    <div className="flex-1 p-4 pl-8 overflow-auto">
      <Label className="text-xl">
        Active Tasks
      </Label>
      <div className="flex mt-8">
        {tasks.map(task => <ActiveTaskCard {...task} />)}
      </div>
    </div>
  )
}