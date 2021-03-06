import {createStore, createEvent} from 'effector';
import { getTasks } from '../api';

export const TaskStore = createStore(process.env.NODE_ENV === 'development' ? [{"id":"257710dc-3271-433d-998b-ecd4c97fb249","task_name":"test docker image","created_at":"2021-04-05T18:57:29.859843","updated_at":"2021-04-10T15:57:38.849825","task_type":"DockerTask","serde_string":"{\"id\":\"257710dc-3271-433d-998b-ecd4c97fb249\",\"image\":{\"t\":\"Image\",\"c\":\"hello-world:latest\"},\"env\":[],\"container_id\":\"\"}","frequency":"Every(45 * * * * *)","last_execution":"2021-04-10T15:57:38.847924","next_execution":"2021-04-10T16:45:00","exec_count":12},{"id":"a7afd775-faad-4ef2-a0b4-8bd1285a382e","task_name":"testing panel","created_at":"2021-04-04T22:51:11.264120","updated_at":"2021-04-06T20:28:30.964177","task_type":"CmdTask","serde_string":"{\"id\":\"a7afd775-faad-4ef2-a0b4-8bd1285a382e\",\"command\":\"echo \\\"$(sleep 10) YOYOYO\\\";\"}","frequency":"Hook","last_execution":"2021-04-06T20:28:30.962953","next_execution":null,"exec_count":7},{"id":"36c629b5-f30f-4d19-9c70-0d2bdd8a00bc","task_name":"gokay-testx-file","created_at":"2021-03-30T21:35:27.950517","updated_at":"2021-04-10T16:07:45.807771","task_type":"DockerTask","serde_string":"{\"id\":\"36c629b5-f30f-4d19-9c70-0d2bdd8a00bc\",\"image\":{\"t\":\"File\",\"c\":\"from alpine:latest\\ncmd sleep 15 && echo 'hello'\"},\"env\":[],\"container_id\":\"\"}","frequency":"Every(45 * * * * * *)","last_execution":"2021-04-10T16:07:45.806467","next_execution":"2021-04-10T16:08:45","exec_count":702}] : []);

export const setTasks = createEvent();
export const refreshTasks = () => {
  getTasks().then(setTasks);
};

TaskStore.on(setTasks, (_, tasks) => tasks);
