import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { getReports, getTaskReports } from "../api";
import ConditionalRenderer from "../components/ConditionalRenderer";
import Input from "../components/Input";
import Label from "../components/Label";
import ReportCard from "../components/ReportCard";
import TaskCardReports from "../components/TaskCardReports";
import TurquoiseButton from "../components/TurquoiseButton";
import WideCard from "../components/WideCard";
import { TaskIcons } from "../configs/tasks";
import useFuse from "../hooks/useFuse";
import { ReportStore, setActiveTaskForReports, setActiveTaskReports, setReports } from "../stores/ReportStore";
import { TaskStore } from "../stores/TaskStore";

export default function Reports() {
  const [lastTenReports, setLastTenReports] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = useStore(TaskStore);
  const { reports, active_task_id, active_task_reports } = useStore(ReportStore);
  const fuse = useFuse({
    list: tasks,
    options: {
      includeScore: true,
      keys: ['task_name', 'serde_string', 'last_exec', 'task_type', 'id']
    }
  });
  useEffect(() => {
    getReports(100).then(reportsAll => {
      setReports(reportsAll);
      const temp = [];
      for (let i = 0; i < 10; i++) {
        const report = reportsAll[i];
        const { task_id } = report;
        const { task_name } = tasks.find(({ id }) => id === task_id);
        temp.push({ task_name, ...report });
      }
      setLastTenReports(temp);
    });
  }, []);
  useEffect(() => {
    if (active_task_id === '') {
      setSelectedTask({});
    } else {
      const task = tasks.find(({ id }) => id === active_task_id);
      setSelectedTask(task);
      getTaskReports(task.id).then(reports => {
        setActiveTaskReports(reports);
      });
    }
  }, [active_task_id]);
  const IconComponent = TaskIcons[selectedTask?.task_type || 'DockerTask'];
  return (
    <div className="flex-1 p-4 pl-8 overflow-auto">
      <Label className="text-xl">
        Last executions
      </Label>
      <div className="flex flex-nowrap overflow-x-auto py-4 -mx-2">
        {lastTenReports.map(report => <ReportCard key={report.id} {...report} />)}
      </div>
      <div>
        <Input label="Executions by task" labelProps={{ className: 'text-xl' }} placeholder="My task" className="mt-2" />
      </div>
      <div className="flex mt-4 -m-4 flex-wrap overflow-x-hidden">
        <ConditionalRenderer condition={active_task_id == ''}>
          {tasks.map(task => <TaskCardReports key={task.id} {...task} />)}
        </ConditionalRenderer>
        <ConditionalRenderer condition={active_task_id}>
          <div className="mt-4 flex-1 flex flex-col items-start">
            <Label className="ml-4 text-xl">
              <div className="flex justify-center items-center border-b-2 border-white pb-2">
                <IconComponent className="fill-current text-white h-8 w-8 mr-2" />
                {selectedTask?.task_name}
              </div>
            </Label>
            <div className="ml-4 mt-4">
              <TurquoiseButton onClick={() => setActiveTaskForReports('')}>
                Clear selected task
              </TurquoiseButton>
            </div>
            <Label className="text-lg mt-6 ml-4">
              Latest reports
            </Label>
            <div className="m-2 mt-4 flex flex-wrap overflow-x-hidden">
              {active_task_reports.map(report => {
                return (
                <WideCard className={`m-2 ${report.successful ? 'bg-success-blueish' : 'bg-failed'}`} task_name={selectedTask?.task_name} task_type={selectedTask?.task_type} info={[
                  `Executed at: ${new Date(report.created_at).toLocaleString()}`,
                ]}
                ButtonComponent={
                  <div className="p-2">
                    <TurquoiseButton>
                      View report
                    </TurquoiseButton>
                  </div>
                }
                key={report.id}
                />);
              })}
            </div>
          </div>
        </ConditionalRenderer>
      </div>
    </div>
  );
}