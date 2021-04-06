import {createStore, createEvent} from 'effector';

export const ModalStore = createStore({
  title: null,
  text: null,
  buttons: null,
  isVisible: false
});

export const setModalTitle = createEvent();
export const setModalText = createEvent();
export const setModalButtons = createEvent();
export const setModalVisible = createEvent();

ModalStore.on(setModalTitle, (state, title) => ({ ...state, title }));
ModalStore.on(setModalText, (state, text) => ({ ...state, text }));
ModalStore.on(setModalButtons, (state, buttons) => ({ ...state, buttons }));
ModalStore.on(setModalVisible, (state, isVisible) => ({ ...state, isVisible }));
