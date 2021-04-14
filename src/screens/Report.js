import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getReport } from "../api";
import CodeEditor from "../components/CodeEditor";
import Label from "../components/Label";
import TurquoiseButton from "../components/TurquoiseButton";
import { ReportStore } from "../stores/ReportStore";
import { TaskStore } from "../stores/TaskStore";

export default function Report() {
  const { reports } = useStore(ReportStore);
  const tasks = useStore(TaskStore);
  const [selectedReport, setSelectedReport] = useState({});
  const [taskName, setTaskName] = useState('');
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (!id) {
      history.push('/reports');
    } else {
      const report = reports.find(({ id: reportID }) => reportID === id);
      if (!report) {
        getReport(id).then((report) => {
          setSelectedReport(report);
          setTaskName(tasks.find(({ id }) => report.task_id === id).task_name);
        });
      } else {
        setSelectedReport(report);
        setTaskName(tasks.find(({ id }) => report.task_id === id).task_name);
      }
    }
  }, [id]);
  return (
    <div className="flex-1 p-4 pl-8 overflow-auto relative">
      <Link to="/reports" className="absolute top-0 left-0 mt-4 ml-8">
        <TurquoiseButton>
          Back to Reports
        </TurquoiseButton>
      </Link>
      <Label className="mt-20">
        Task name: {taskName}
      </Label>
      <Label className="mt-8">
        Execution status: {selectedReport.successful ? 'Success' : 'Failed'}
      </Label>
      <Label className="mt-8">
        Execution date: {new Date(selectedReport.created_at).toLocaleString()}
      </Label>
      {selectedReport.output && (
        <>
          <Label className="mt-8">
            Output
          </Label>
          <div id="code-editor" className="h-auto mt-8"></div>
          <CodeEditor
            content={selectedReport?.output?.join('\n')}
            readonly={true}
            mountID="code-editor"
            mode="shell"
          />
        </>
      )}
    </div>
  )
}