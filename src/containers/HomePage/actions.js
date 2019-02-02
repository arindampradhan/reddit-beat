import axios from "axios";
import {
  SUBREDDIT_REQUEST,
  SUBREDDIT_SUCCESS,
  SUBREDDIT_FAILURE,
  SUBREDDITLIST,
  SUBREDDITHIDE,
  SUBREDDITALREADY
} from "./constants";

export const getSubreddit = subreddit => (dispatch, getState) => {
  const store = getState();
  if (store && store.subreddit && store.subreddit[subreddit]) {
    dispatch({ type: SUBREDDITALREADY, payload: subreddit });
    return;
  }

  dispatch({
    type: SUBREDDIT_REQUEST,
    payload: subreddit
  });
  return axios
    .get(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => {
      dispatch({
        type: SUBREDDIT_SUCCESS,
        payload: { ...res.data, subreddit }
      });
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
