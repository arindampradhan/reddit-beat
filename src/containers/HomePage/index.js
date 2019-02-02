import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "./actions";
import { NavLink as Link } from "react-router-dom";
import ListView from "../../components/ListView";
import ListViewLoader from "../../components/ListView/Loading";
import Waypoint from "react-waypoint";
import PropTypes from "prop-types";

class HomePage extends Component {
  state = {
    loading: false
  };
  apiCall(props) {
    const { getSubreddit, getSubList, dispatch, match } = props;
    dispatch(getSubList());
    dispatch(getSubreddit(match.params.subreddit));
  }

  componentDidMount() {
    this.apiCall(this.props);
  }

  componentWillReceiveProps(nProps) {
    const currentProps = this.props;
    if (currentProps.match.params.subreddit !== nProps.match.params.subreddit)
      this.apiCall(nProps);
  }

  hide = id => {
    const { redditHide, dispatch } = this.props;
    dispatch(redditHide(id));
  };

  handleWayPointEnter = () => {
    const { getSubreddit, dispatch, match, subreddit } = this.props;
    const after = subreddit.after[match.params.subreddit];
    if (after) {
      this.setState({
        loading: true
      });
      dispatch(getSubreddit(match.params.subreddit, after))
        .then(() => {
          this.setState({
            loading: false
          });
        })
        .catch(() => {
          this.setState({ loading: false });
        });
    }
  };

  render() {
    const { subredditList, match, subreddit } = this.props;
    const result =
      match.params.subreddit &&
      subreddit[match.params.subreddit] &&
      subreddit[match.params.subreddit].length
        ? subreddit[match.params.subreddit]
        : [];
    const isEmpty = !result.length && !subreddit.request ? true : false;
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row padding-t-40">
            {/* SideBar */}
            <div className="col-12 col-md-3 sidebar">
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
            {/* Subreddit */}
            {/* <PosedRouter>     */}
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-6">
                  <h4>
                    <img
                      src={"/reddit2.png"}
                      alt="Title"
                      className="img-fluid img-title"
                    />{" "}
                    &nbsp;/{match.params.subreddit}
                  </h4>
                </div>
                <div className="col-6 text-right padding-0 d-none d-md-block">
                  <button className="btn btn-primary gradient--loon-crest">
                    <i className="fas fa-plus-circle" /> SUBMIT
                  </button>
                </div>
              </div>
              {subreddit.request ? (
                <>
                  {[0, 1, 2, 3, 5, 6, 7].map(item => (
                    <ListViewLoader key={item} />
                  ))}
                </>
              ) : (
                <>
                  {subreddit[match.params.subreddit] &&
                    subreddit[match.params.subreddit].length &&
                    subreddit[match.params.subreddit].map(item => (
                      <ListView
                        hide={id => this.hide(id)}
                        {...item}
                        key={`${match.params.subreddit}-${item.id}`}
                      />
                    ))}
                  {subreddit[match.params.subreddit] &&
                  subreddit[match.params.subreddit].length ? (
                    <>
                      {this.state.loading ? (
                        <h2 className="text-center">Loading...</h2>
                      ) : (
                        <Waypoint onEnter={this.handleWayPointEnter}>
                          <h1 className="text-center">See more results</h1>
                        </Waypoint>
                      )}
                    </>
                  ) : null}
                </>
              )}
              {isEmpty ? (
                <div className="text-center">
                  <div className="margin-auto col-md-8 padding-y-50">
                    <img
                      src={"/result_not_found.png"}
                      className="img-fluid"
                      alt="result not found"
                    />{" "}
                  </div>
                  <h2 className="text-primary">Sorry! We searched hard...</h2>
                  <p className="text-secondary">
                    Search in a different subreddit.
                  </p>
                </div>
              ) : null}
            </div>
            {/* </PosedRouter> */}
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  getSubreddit: PropTypes.func,
  getSubList: PropTypes.func,
  redditHid: PropTypes.func,
  subreddit: PropTypes.shape({
    ui: PropTypes.array,
    request: PropTypes.bool,
    after: PropTypes.object
  })
};

const mapState = state => {
  return {
    ...state
  };
};

const mapDispatch = dispatch => {
  return {
    dispatch,
    ...actions
  };
};

export default connect(
  mapState,
  mapDispatch
)(HomePage);
