import {LOAD_ANSWER,LOAD_BUTTONS,LOAD_CLEAR,LOAD_BACKSPACE,LOAD_SIN,LOAD_COS, LOAD_TAN, LOAD_LOG} from "./ActionTypes";

export const loadButtons = (number) => {
  return {
    type: LOAD_BUTTONS,
    payload: number,
  };
};

export const loadAnswer = (number) => {
  return {
    type: LOAD_ANSWER,
    payload: number,
  };
};

export const loadClear = (number) => {
  return {
    type: LOAD_CLEAR,
    payload: number,
  };
};

export const loadBackspace = (number) => {
  return {
    type: LOAD_BACKSPACE,
    payload: number,
  };
};

export const loadSin = (number) => {
  return {
    type: LOAD_SIN,
    payload: number,
  };
};

export const loadCos = (number) => {
  return {
    type: LOAD_COS,
    payload: number,
  };
};

export const loadTan = (number) => {
  return {
    type: LOAD_TAN,
    payload: number,
  };
};

export const loadLog = (number) => {
  return {
    type: LOAD_LOG,
    payload: number,
  };
};