import {createStore, createEvent} from 'effector';

export const CreateTaskStore = createStore({
  task_type: null,
  task_name: '',
  frequency: '',
  task_props: {}
});

export const setTaskType = createEvent();
export const setTaskName = createEvent();
export const setFrequency = createEvent();
export const setTaskProps = createEvent();
export const setTaskProp = key => value => {
  setTaskProps({ [key]: value });
};

CreateTaskStore.on(setTaskType, (state, taskType) => ({ ...state, task_type: taskType }));
CreateTaskStore.on(setTaskName, (state, taskName) => ({ ...state, task_name: taskName }));
CreateTaskStore.on(setFrequency, (state, frequency) => ({ ...state, frequency }));
CreateTaskStore.on(setTaskProps, (state, props) => ({ ...state, task_props: { ...state.task_props, ...props } }));