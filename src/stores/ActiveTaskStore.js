import {createStore, createEvent} from 'effector';
import { getActiveTasks } from '../api';

const MAX_RETRY_COUNT = 3;

export const ActiveTaskStore = createStore({
  tasks: [],
  isLoaded: false,
  retryCount: 0
});

export const setActiveTasks = createEvent();
export const setActiveTasksLoaded = createEvent();
export const incRetry = createEvent();
export const resetRetry = createEvent();

const interval = setInterval(fetchActiveTasks, 1000);

function fetchActiveTasks() {
  if (ActiveTaskStore.getState().retryCount !== MAX_RETRY_COUNT) {
    getActiveTasks().then((tasks) => {
      setActiveTasks(tasks);
      resetRetry();
    }).catch((err) => {
      incRetry();
      console.error(err);
    });
  } else {
    clearInterval(interval);
  }
  console.log(ActiveTaskStore.getState().retryCount);
}

ActiveTaskStore.on(setActiveTasks, (state, tasks) => ({ ...state, tasks }));
ActiveTaskStore.on(setActiveTasksLoaded, (state, isLoaded) => ({ ...state, isLoaded }));
ActiveTaskStore.on(incRetry, (state) => ({ ...state, retryCount: state.retryCount + 1 }));
ActiveTaskStore.on(resetRetry, (state) => ({ ...state, retryCount: 0 }));
