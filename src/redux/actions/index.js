import { actionTypes } from "../constants/action-types";

const {
  ADD_CARD_DATA,
  DELETE_CARD_DATA,
  EDIT_CARD_DATA,
  COPY_CARD_DATA,
  SELECTED_CARD_DATA,
} = actionTypes;

export const addCardData = (data) => {
  return {
    type: ADD_CARD_DATA,
    payload: data,
  };
};

export const deleteCardData = (data) => {
  return {
    type: DELETE_CARD_DATA,
    payload: data,
  };
};

export const selectedCardData = (data) => {
  return {
    type: SELECTED_CARD_DATA,
    payload: data,
  };
};

export const editCardData = (data) => {
  return {
    type: EDIT_CARD_DATA,
    payload: data,
  };
};

export const copyCardData = (data) => {
  return {
    type: COPY_CARD_DATA,
    payload: data,
  };
};
