import { useStore } from "effector-react";
import { useState } from "react";
import { createTask } from "../api";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import Label from "../components/Label";
import TurquoiseButton from "../components/TurquoiseButton";
import { FREQUENCY_OPTIONS } from "../configs/frequency";
import { TaskIcons, TaskTypes } from "../configs/tasks";
import { CreateTaskStore, setFrequency, setTaskName, setTaskType } from "../stores/CreateTaskStore";
import { checkCron } from "../utils";
import TasksCreateProperties from "./Tasks.Create.Properties";

export default function TasksGenericAction({
  store: PropStore,
  onFrequencyChange,
  onTaskNameChange,
  onTaskTypeChange,
  onActionClick
}) {
  const [cronError, setCronError] = useState(false);
  const [frequencyType, setFrequencyType] = useState('HOOK');
  const store = useStore(PropStore);
  const frequencyOptions = Object.entries(FREQUENCY_OPTIONS).map(([key, value]) => {
    return {
      value: key,
      label: value
    };
  });
  const onFrequencyDropdownChange = ({ value }) => {
    if (value === 'HOOK') {
      onFrequencyChange('Hook');
      setCronError(false);
    }
    setFrequencyType(value);
    if (value === 'CRON') {
      setCronError(true);
    }
  };
  const onCronStringChange = (value) => {
    if (!checkCron(value)) {
      setCronError(false);
      onFrequencyChange(`Every(${value.trim()})`);
    } else {
      setCronError(true);
      onFrequencyChange('');
    }
  };
  const checkErrors = () => {
    const cronIsOk = () => {
      return store.frequency.includes('Every') ? !checkCron(store.frequency?.split?.('(')?.[1]?.split?.(')')?.[0] || '') : true;
    };
    if (!cronError && store.frequency && store.task_name && Object.keys(store.task_props).length !== 0 && cronIsOk()) {
      return true;
    }
    return false;
  };
  // const onActionClick = () => {
  //   createTask(store);
  // };
  return (
    <div className="flex-1 p-4 pl-8 overflow-auto">
      <Label className="text-xl">
        Create a new task
      </Label>
      <Label className="mt-12">
        Select the task type
      </Label>
      <div className="flex mt-8 -ml-2 -mr-2">
        {Object.keys(TaskTypes).map(key => {
          const Icon = TaskIcons[key];
          return (
            <TurquoiseButton active={store.task_type === key} onClick={() => onTaskTypeChange(key)} className="m-2">
              <Icon className="w-9 h-9 fill-current mr-4" />
              {TaskTypes[key]}
            </TurquoiseButton>
          );
        })}
      </div>
      <Input defaultValue={store.task_name} label="Task name" placeholder="My new StewardX task" className="mt-4" onChange={onTaskNameChange} />
      <Label>
        Frequency
      </Label>
      <Dropdown options={frequencyOptions} onChange={onFrequencyDropdownChange} />
      {frequencyType === 'CRON' && (
        <>
          <Input label="Cron string" placeholder="* * * * * *" onChange={onCronStringChange} />
          {cronError && <div className="text-red-700 text-sm">Please enter a valid cron string!</div>}
        </>
      )}
      <TasksCreateProperties />
      <div className="flex mt-8">
        <TurquoiseButton onClick={onActionClick} disabled={!checkErrors()} className={checkErrors() ? 'opacity-100' : 'opacity-30 pointer-events-none'}>
          Create
        </TurquoiseButton>
      </div>
    </div>
  )
}