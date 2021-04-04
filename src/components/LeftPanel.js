import LeftPanelItem from "./LeftPanelItem";
import LeftPanelItemChild from "./LeftPanelItemChild";

export default function LeftPanel() {
  
  return (
    <div className="l-0 t-0 h-full w-60 p-4 pr-0 border-r-2 border-white">
      <LeftPanelItem routeKey="dashboard" to="/dashboard" className="text-xl">
        Dashboard
      </LeftPanelItem>
      <LeftPanelItem routeKey="tasks" to="/tasks/all" className="text-xl">
        Tasks
      </LeftPanelItem>
      <LeftPanelItemChild childOf={'tasks'} to="/tasks/all">
        - All tasks
      </LeftPanelItemChild>
      <LeftPanelItemChild childOf={'tasks'} to="/tasks/create">
        - Create a new task
      </LeftPanelItemChild>
      <LeftPanelItem routeKey="settings" to="/settings" className="text-xl">
        Settings
      </LeftPanelItem>
    </div>
  )
}