import { BrowserRouter, Route, Switch } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import Dashboard from "./screens/Dashboard";
import Settings from "./screens/Settings";
import TasksAll from "./screens/Tasks.All";
import TasksCreate from "./screens/Tasks.Create";
import TasksEdit from "./screens/Tasks.Edit";

function App() {
  return (
    <BrowserRouter basename="/app">
      <div className="h-full flex font-display">
        <LeftPanel />
          <Switch>
            <Route path="/tasks/all">
              <TasksAll />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/tasks/create">
              <TasksCreate />
            </Route>
            <Route path="/tasks/edit/:id">
              <TasksEdit />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
