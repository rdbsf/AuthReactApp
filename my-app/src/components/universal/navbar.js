import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    navbarLinks() {
        if (this.props.authenticated) {
            return [
                <li key="home"><Link to="/welcome">Home</Link></li>,
                <li key="secret"><Link to="/secret">Secret</Link></li>,
                <li key="signout"><Link to="/signout">Sign out</Link></li>
            ];
        }
        return [
            <li key="signin"><Link to="/signin">Sign in</Link></li>,
            <li key="signup"><Link to="/signup">Sign up</Link></li>
        ];
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <Link to="/" className="navbar-brand"><span className="brand">Auth-app</span></Link>
                    {
                        this.props.authenticated && this.props.user &&
                        <p>Hello, {this.props.user.full_name}</p>
                    }
                    <ul>
                        {this.navbarLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.user.profile,
    };
}

export default connect(mapStateToProps)(Navbar);