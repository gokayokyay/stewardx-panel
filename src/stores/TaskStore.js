import {createStore, createEvent} from 'effector';

export const TaskStore = createStore(process.env.NODE_ENV === 'development' ? [
  {
    created_at: "2021-04-05T18:57:29.859843",
    exec_count: 8,
    frequency: "Every(45 * * * * *)",
    id: "257710dc-3271-433d-998b-ecd4c97fb249",
    last_execution: "2021-04-06T21:45:00.593843",
    next_execution: "2021-04-06T22:45:00",
    serde_string: "{\"id\":\"257710dc-3271-433d-998b-ecd4c97fb249\",\"image\":{\"t\":\"Image\",\"c\":\"hello-world:latest\"},\"env\":[],\"container_id\":\"\"}",
    task_name: "test docker image",
    task_type: "DockerTask",
    updated_at: "2021-04-06T21:45:00.595709"
  }
] : []);

export const setTasks = createEvent();

TaskStore.on(setTasks, (_, tasks) => tasks);
