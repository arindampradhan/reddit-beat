import {
    SUBREDDIT_REQUEST,
    SUBREDDIT_SUCCESS,
    SUBREDDIT_FAILURE,
    SUBREDDITLIST
} from './constants';

const subredditState = {
    ui: [],
    request: false,
}

export function subredditReducer(state = subredditState, action) {
    const {payload, type} = action

    switch (type) {
        case SUBREDDIT_REQUEST:
            return { ...state, request: true }
        case SUBREDDIT_SUCCESS:
            let ui = []
            if (payload.data && payload.data.children && payload.data.children.length) {
                ui = payload.data.children.map(item => ({
                    kind: item.kind,
                    ...item.data
                }));
            }
            return { ...state, request: false, ui }
        case SUBREDDIT_FAILURE:
            return { ...state, request: false, error: payload }
        default:
            return state
    }
}

const subListState = {
    ui: []
}
export function subredditListReducer(state = subListState, action) {
    const { payload, type } = action

    switch (type) {
        case SUBREDDITLIST:
            return { ...state, ui : payload };
        default:
            return state;
    }
}