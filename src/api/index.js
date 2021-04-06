import axios from 'axios';
import { SettingsStore } from '../stores/SettingsStore';

const Instance = axios.create({
  baseURL: SettingsStore.getState().baseURL
});

SettingsStore.watch(state => {
  if (state.baseURL !== Instance.defaults.baseURL) {
    Instance.defaults.baseURL = state.baseURL;
  }
});

const wrapper = method => (...params) => {
  return new Promise((resolve, reject) => {
    Instance[method](...params).then(res => {
      resolve(res.data);
    }).catch(reject);
  });
};

const API = {
  get: wrapper('get'),
  post: wrapper('post'),
  delete: wrapper('delete')
};

export const getTasks = () => {
  return API.get('/tasks');
};

export const getActiveTasks = () => {
  return API.get('/activetasks');
};

export const getTask = (id) => {
  return API.get(`/tasks/${id}`);
};

export const createTask = (params) => {
  return API.post('/tasks', params);
};

export const updateTask = ({ id, ...params }) => {
  return API.post(`/tasks/${id}`, params);
};

export const executeTask = (id) => {
  return API.post(`/execute`, {
    task_id: id
  });
};

export const abortTask = (id) => {
  return API.post('/abort', {
    task_id: id
  });
};
