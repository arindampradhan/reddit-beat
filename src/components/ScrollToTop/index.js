import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            setTimeout(function () {
                window.scrollTo(0, 0);
            });
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};

export default withRouter(ScrollToTop);