import {
  SUBREDDIT_REQUEST,
  SUBREDDIT_SUCCESS,
  SUBREDDIT_FAILURE,
  SUBREDDITLIST,
  SUBREDDITHIDE,
  SUBREDDIT_AFTER
} from "./constants";

const subredditState = {
  ui: [],
  request: false,
  after: {}
};
export function subredditReducer(state = subredditState, action) {
  const { payload, type } = action;

  switch (type) {
    case SUBREDDIT_REQUEST:
      return { ...state, request: true };
    case SUBREDDIT_SUCCESS: {
      const { subreddit } = payload;
      let ui = [];
      if (
        payload.data &&
        payload.data.children &&
        payload.data.children.length
      ) {
        ui = payload.data.children
          .map(item => ({
            kind: item.kind,
            ...item.data
          }))
          .filter(item => {
            return item.post_hint && item.post_hint === "image" ? true : false;
          });
      }
      const after = {
        ...state.after,
        ...{ [subreddit]: payload.data.after }
      };
      if (state && (!state[subreddit] || !state[subreddit].length)) {
        return {
          ...state,
          request: false,
          ui,
          [subreddit]: ui,
          after
        };
      }
      return { ...state, request: false, ui };
    }
    case SUBREDDIT_AFTER: {
      const { subreddit: subredditName } = payload;
      // eslint-disable-next-line no-redeclare
      let ui_ = state[subredditName];
      if (
        payload.data &&
        payload.data.children &&
        payload.data.children.length
      ) {
        const ui2 = payload.data.children
          .map(item => ({
            kind: item.kind,
            ...item.data
          }))
          .filter(item => {
            return item.post_hint && item.post_hint === "image" ? true : false;
          });
        ui_ = [...ui_, ...ui2];
      }
      const after = {
        ...state.after,
        ...{ [subredditName]: payload.data.after }
      };
      return {
        ...state,
        request: false,
        ui: ui_,
        [subredditName]: ui_,
        after
      };
    }
    case SUBREDDIT_FAILURE:
      return { ...state, request: false, error: payload };
    case SUBREDDITHIDE:
      const ui2 = state.ui.map(item => ({
        ...item,
        hidden: item.id === payload ? true : false
      }));
      return { ...state, ui: ui2 };
    default:
      return state;
  }
}

const subListState = {
  ui: []
};
export function subredditListReducer(state = subListState, action) {
  const { payload, type } = action;

  switch (type) {
    case SUBREDDITLIST:
      return { ...state, ui: payload };
    default:
      return state;
  }
}
