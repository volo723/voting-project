import { MessagesState } from "../types";

import { createReducer } from "../../utils/createReducer";
import {
  createNewMessage,
  createLinkSnippet,
  createComponentMessage,
} from "../../utils/messages";
import { MESSAGE_SENDER } from "../../constants";
import {
  MessagesActions,
  ADD_NEW_USER_MESSAGE,
  ADD_NEW_RESPONSE_MESSAGE,
  ADD_NEW_LINK_SNIPPET,
  ADD_COMPONENT_MESSAGE,
  DROP_MESSAGES,
  HIDE_AVATAR,
  DELETE_MESSAGES,
  MARK_ALL_READ,
  SET_BADGE_COUNT,
} from "../actions/types";

const initialState = {
  messages: [],
  badgeCount: 0,
};

const messagesReducer = {
  //@ts-ignore
  [ADD_NEW_USER_MESSAGE]: (state: MessagesState, { text, id }) => ({
    ...state,
    messages: [
      ...state.messages,
      createNewMessage(text, MESSAGE_SENDER.CLIENT, id),
    ],
  }),
  //@ts-ignore
  [ADD_NEW_RESPONSE_MESSAGE]: (state: MessagesState, { text, id }) => ({
    ...state,
    messages: [
      ...state.messages,
      createNewMessage(text, MESSAGE_SENDER.RESPONSE, id),
    ],
    badgeCount: state.badgeCount + 1,
  }),
  //@ts-ignore
  [ADD_NEW_LINK_SNIPPET]: (state: MessagesState, { link, id }) => ({
    ...state,
    messages: [...state.messages, createLinkSnippet(link, id)],
  }),

  [ADD_COMPONENT_MESSAGE]: (
    state: MessagesState,
    //@ts-ignore
    { component, props, showAvatar, id }
  ) => ({
    ...state,
    messages: [
      ...state.messages,
      createComponentMessage(component, props, showAvatar, id),
    ],
  }),

  [DROP_MESSAGES]: (state: MessagesState) => ({ ...state, messages: [] }),
  //@ts-ignore
  [HIDE_AVATAR]: (state: MessagesState, { index }) =>
    (state.messages[index].showAvatar = false),
  //@ts-ignore
  [DELETE_MESSAGES]: (state: MessagesState, { count, id }) => ({
    ...state,
    messages: id
      ? state.messages.filter((message) => message.customId !== id)
      : state.messages.splice(state.messages.length - 1, count),
  }),
  //@ts-ignore
  [SET_BADGE_COUNT]: (state: MessagesState, { count }) => ({
    ...state,
    badgeCount: count,
  }),

  [MARK_ALL_READ]: (state: MessagesState) => ({
    ...state,
    messages: state.messages.map((message) => ({ ...message, unread: false })),
    badgeCount: 0,
  }),
};

export default (state = initialState, action: MessagesActions) =>
  createReducer(messagesReducer, state, action);
