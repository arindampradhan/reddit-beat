import React, { Component } from 'react'
import { NavLink as Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
} from 'reactstrap';


export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }    
    
  render() {
    return (
      <header>

            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">
                    <img src="/reddit.png" width="30" height="30" className="d-inline-block align-top img-fluid" alt="reddit" />
                    <img src="/reddit-name.png" width="80" height="30" className="d-inline-block align-top img-fluid" alt="reddit" />
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/adviceanimals" href="/r/adviceanimals" >adviceanimals <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/cats" href="/r/cats">cats</Link>
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/images" href="/r/images">images</Link>
                        <Link className="nav-item nav-link" activeClassName="active" to="/theme" href="/theme">theme</Link>
                    </Nav>
                    <Nav className="navbar-nav ml-auto d-none d-md-block" navbar>
                        <Link className="nav-item nav-link" activeClassName="active" to="/r/notification" href="/r/notification" ><i className="far fa-bell"></i></Link>
                    </Nav>
                    <Link className="navbar-brand d-none d-md-block" to="/">
                        <img src='/user.jpg' alt="user" className="img-fluid rounded-circle img-header" />
                    </Link>
                </Collapse>
            </Navbar>
      </header>
    )
  }
}
