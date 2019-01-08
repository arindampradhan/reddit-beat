import axios from 'axios';
import {
    SUBREDDIT_REQUEST,
    SUBREDDIT_SUCCESS,
    SUBREDDIT_FAILURE,
    SUBREDDITLIST   
} from './constants';

export const getSubreddit = (subreddit) => (dispatch, getState) => {
    dispatch({
        type: SUBREDDIT_REQUEST,
        payload: true
    })
    return axios.get(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
        dispatch({
            type: SUBREDDIT_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: SUBREDDIT_FAILURE,
            payload: err.message
        })
    })
}

export const getSubList = () => (dispatch, getState) => {
    const payload = ['alternativeart', 'pics', 'gifs', 'adviceanimals', 'cats', 'images', 'photoshopbattles', 'hmmm', 'all', 'aww']
    dispatch({
        type: SUBREDDITLIST,
        payload
    })
}


export default {
    getSubreddit,
    getSubList,
}