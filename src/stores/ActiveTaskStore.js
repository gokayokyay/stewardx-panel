import {createStore, createEvent} from 'effector';
import { getActiveTasks } from '../api';

export const ActiveTaskStore = createStore({
  tasks: [],
  isLoaded: false
});

export const setActiveTasks = createEvent();
export const setActiveTasksLoaded = createEvent();

const ActiveTaskInterval = setInterval(() => {
  getActiveTasks().then(setActiveTasks).catch(console.error);
}, 1000);

ActiveTaskStore.on(setActiveTasks, (state, tasks) => ({ ...state, tasks }));
ActiveTaskStore.on(setActiveTasksLoaded, (state, isLoaded) => ({ ...state, isLoaded }));
