import {createStore, createEvent} from 'effector';

export const UpdateTaskStore = createStore({
  task_id: '',
  task_type: null,
  task_name: '',
  frequency: '',
  task_props: {}
});

export const setTaskType = createEvent();
export const setTaskName = createEvent();
export const setFrequency = createEvent();
export const setTaskProps = createEvent();
export const setState = createEvent();

UpdateTaskStore.on(setTaskType, (state, taskType) => ({ ...state, task_type: taskType }));
UpdateTaskStore.on(setTaskName, (state, taskName) => ({ ...state, task_name: taskName }));
UpdateTaskStore.on(setFrequency, (state, frequency) => ({ ...state, frequency }));
UpdateTaskStore.on(setTaskProps, (state, props) => ({ ...state, task_props: { ...state.task_props, ...props } }));
UpdateTaskStore.on(setState, (_, newState) => newState);
