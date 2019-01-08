import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { subredditReducer, subredditListReducer } from './containers/HomePage/reducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    subreddit: subredditReducer,
    subredditList: subredditListReducer,
})