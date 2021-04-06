import { useStore } from "effector-react";
import { executeTask } from "../api";
import { ActiveTaskStore } from "../stores/ActiveTaskStore";
import TurquoiseButton from "./TurquoiseButton";
import WideCard from "./WideCard";
import { ReactComponent as Spinner } from '../assets/button-spinner.svg';
import { Link } from "react-router-dom";
import { setModalButtons, setModalText, setModalTitle, setModalVisible } from "../stores/ModalStore";

export default function TaskCard({
  updated_at = new Date(),
  exec_count = 0,
  next_exec = new Date(),
  ...props
}) {
  const activeTasksStore = useStore(ActiveTaskStore);
  const isActive = activeTasksStore.tasks.some(({ id }) => id === props.id);
  const onExecuteClick = () => {
    executeTask(props.id).then(console.log).catch(console.error);
  };
  const onEditClick = () => {
    setModalTitle('WIP');
    setModalText('This feature is not complete yet!');
    setModalButtons(
      <div className="p-4 justify-center items-center flex">
        <TurquoiseButton onClick={() => setModalVisible(false)}>
          Okay
        </TurquoiseButton>
      </div>
    );
    setModalVisible(true);
  };
  return (
    <WideCard
      info={[
        `Last updated: ${new Date(updated_at).toLocaleString()}`,
        `Executed ${exec_count} times.`,
        `Next execution: ${new Date(next_exec).toLocaleString()}`
      ]}
      className="h-56 m-4"
      ButtonComponent={
        <div className="flex-1 flex justify-around items-center pb-4 px-2">
          <TurquoiseButton onClick={onExecuteClick} active={isActive} disabled={isActive}>
            {isActive ? <Spinner className="animate-spin w-6 h-6" /> : 'Execute task'}
          </TurquoiseButton>
          {/* <Link to={`/tasks/edit/${props.id}`}> */}
          <TurquoiseButton onClick={onEditClick}>
            Edit task
          </TurquoiseButton>
          {/* </Link> */}
        </div>
      }
      {...props}
    />
  );
}