import React, { Component } from 'react'
import { NavLink as Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src="/reddit.png" width="30" height="30" class="d-inline-block align-top img-fluid" alt="reddit" />
                        <img src="/reddit-name.png" width="80" height="30" class="d-inline-block align-top img-fluid" alt="reddit" />
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav mr-auto">
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/adviceanimals" href="/r/adviceanimals" >adviceanimals <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/cats" href="/r/cats">cats</Link>
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/images" href="/r/images">images</Link>
                    </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/notification" href="/r/notification" ><i className="far fa-bell"></i></Link>
                    </ul>
                    <Link className="navbar-brand" to="/">
                        <img src='/user.jpg' alt="user" className="img-fluid rounded-circle img-header" />
                    </Link>
                </div>
            </nav>        
      </header>
    )
  }
}
