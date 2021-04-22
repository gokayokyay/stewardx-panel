import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateTask } from "../api";
import CodeEditor from "../components/CodeEditor";
import Label from "../components/Label";
import OrangeButton from "../components/OrangeButton";
import TurquoiseButton from "../components/TurquoiseButton";
import { setModalButtons, setModalText, setModalTitle, setModalVisible } from "../stores/ModalStore";
import { TaskStore } from "../stores/TaskStore";

export default function TasksEdit() {
  const { id } = useParams();
  const tasks = useStore(TaskStore);
  const editingTask = tasks.find(({ id: task_id }) => id === task_id);
  const [content, setContent] = useState(editingTask.serde_string);
  const [defaultContent, setDefaultContent] = useState('');
  const [mountID, setMountID] = useState('workaround');
  const onApplyClick = async () => {
    try {
      const params = JSON.parse(content);
      const result = await updateTask(params);
      console.log(result);
      setModalTitle("Success");
      setModalText("Your task has been successfully updated.");
      setModalButtons(
        <>
          <OrangeButton onClick={() => setModalVisible(false)}>
            Great!
          </OrangeButton>
        </>
      );
      setModalVisible(true);
    } catch (err) {
      console.log(err.message);
      if (err.message.startsWith('JSON')) {
        setModalTitle("Invalid JSON");
        setModalText("Content couldn't be parsed into JSON.");
        setModalButtons(
          <>
            <OrangeButton onClick={() => setModalVisible(false)}>
              Okay
            </OrangeButton>
          </>
        );
        setModalVisible(true);
      }
    }
  };
  useEffect(() => {
    try {
      console.log(defaultContent);
      if (defaultContent === '') {
        setDefaultContent(JSON.stringify(JSON.parse(content), null, 2));
        setMountID('code-editor');
      }
    } catch (err) {
      // sry
      alert(err.toString());
    }
  }, [content]);
  return (
    <div className="flex-1 p-4 pl-8 overflow-auto">
      <Label>
        Editing task: 
        <span className="font-bold ml-2">
          {editingTask.task_name}
        </span>
      </Label>
      <div id={mountID} className="h-auto mt-8"></div>
      <CodeEditor
        mountID={mountID}
        mode="javascript"
        content={defaultContent}
        onChange={setContent}
      />
      <div className="mt-4 flex justify-end">
        <TurquoiseButton onClick={onApplyClick}>
          Apply Changes
        </TurquoiseButton>
      </div>
    </div>
  )
}