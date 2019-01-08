import React, { Component } from 'react'
import {connect} from 'react-redux';
import actions from './actions';

class HomePage extends Component {

    componentDidMount() {
        const { getSubreddit, getSubList, dispatch, match } = this.props
        dispatch(getSubList())
        if (match.params.subreddit) dispatch(getSubreddit(match.params.subreddit))
    }

    render() {
        return (
            <div>
                <h1>HomePage</h1>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = (dispatch) => {
    return {
        dispatch,
        ...actions
    }
}

export default connect(mapState, mapDispatch)(HomePage);