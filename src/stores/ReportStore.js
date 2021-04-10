import {createStore, createEvent} from 'effector';

export const ReportStore = createStore({
  active_report_id: '',
  active_task_id: '',
  active_task_reports: [],
  reports: []
});

export const setReports = createEvent();
export const setActiveTaskForReports = createEvent();
export const setActiveTaskReports = createEvent();

ReportStore.on(setActiveTaskForReports, (state, payload) => ({ ...state, active_task_id: payload }));
ReportStore.on(setReports, (state, payload) => ({ ...state, reports: payload }));
ReportStore.on(setActiveTaskReports, (state, payload) => ({ ...state, active_task_reports: payload }));
