import React, { Component } from 'react'
import {connect} from 'react-redux';
import actions from './actions';
import { NavLink as Link } from "react-router-dom";
import ListView from '../../components/ListView';


class HomePage extends Component {

    componentDidMount() {
        const { getSubreddit, getSubList, dispatch, match } = this.props
        dispatch(getSubList())
        if (match.params.subreddit) dispatch(getSubreddit(match.params.subreddit))
    }

    render() {
        const { subredditList} = this.props
        
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row padding-t-40">
                        <div className="col-3 sidebar">
                            <ul className="list-unstyled">
                                {subredditList.ui.map((item, idx) => (
                                    <li key={`reddit-${idx}`}>
                                        <Link to={`/r/${item}`} activeClassName="active">
                                            <i className="fa fa-angle-double-right" />
                                            &nbsp;&nbsp;
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-8">
                            <ListView />
                            <ListView />
                            <ListView />
                            <ListView />
                        </div>
                    </div>
                </div>
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