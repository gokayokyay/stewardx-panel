import {createStore, createEvent} from 'effector';

export const TaskStore = createStore([]);

export const setTasks = createEvent();

TaskStore.on(setTasks, (_, tasks) => tasks);
