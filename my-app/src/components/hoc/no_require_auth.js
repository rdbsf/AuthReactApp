import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class NotAuthentication extends Component {

        componentWillUpdate(nextProps) {
            if (nextProps.authenticated && nextProps.location.pathname === '/signin') {
                // was causing loop when clicking / while on /
                this.props.history.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(NotAuthentication);
}