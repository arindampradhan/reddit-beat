import axios from "axios";
import {
  SUBREDDIT_REQUEST,
  SUBREDDIT_SUCCESS,
  SUBREDDIT_FAILURE,
  SUBREDDITLIST,
  SUBREDDITHIDE,
  SUBREDDITALREADY,
  SUBREDDIT_AFTER
} from "./constants";

export const getSubreddit = (subreddit, after) => (dispatch, getState) => {
  // already called case
  const store = getState();
  if (store && store.subreddit && store.subreddit[subreddit] && !after) {
    dispatch({ type: SUBREDDITALREADY, payload: subreddit });
    return;
  }

  //   after case
  let params = {};
  if (after) {
    params = {
      after
    };
  }

  // normal case
  if (!after) {
    dispatch({
      type: SUBREDDIT_REQUEST,
      payload: subreddit
    });
  }
  return axios
    .get(`https://www.reddit.com/r/${subreddit}.json`, { params })
    .then(res => {
      // for after call
      if (after) {
        dispatch({
          type: SUBREDDIT_AFTER,
          payload: { ...res.data, subreddit, after }
        });
      } else {
        // normal call
        dispatch({
          type: SUBREDDIT_SUCCESS,
          payload: { ...res.data, subreddit }
        });
      }
    })
    .catch(err => {
      dispatch({
        type: SUBREDDIT_FAILURE,
        payload: err.message
      });
    });
};

export const redditHide = subreddit => (dispatch, getState) => {
  dispatch({
    type: SUBREDDITHIDE,
    payload: subreddit
  });
};

export const getSubList = () => (dispatch, getState) => {
  const payload = [
    "alternativeart",
    "pics",
    "gifs",
    "adviceanimals",
    "cats",
    "images",
    "photoshopbattles",
    "hmmm",
    "all",
    "aww"
  ];
  dispatch({
    type: SUBREDDITLIST,
    payload
  });
};

export default {
  getSubreddit,
  getSubList,
  redditHide
};
