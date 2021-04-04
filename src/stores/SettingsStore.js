import {createStore, createEvent} from 'effector';

export const SettingsStore = createStore({
  baseURL: localStorage.getItem('baseURL')
});

export const setSettings = createEvent();
export const setSetting = key => value => setSettings({
  [key]: value
});
SettingsStore.on(setSettings, (state, settings) => {
  const keys = Object.keys(settings);
  keys.forEach(key => {
    localStorage.setItem(key, settings[key]);
  });
  return { ...state, ...settings };
});
