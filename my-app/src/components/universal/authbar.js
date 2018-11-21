import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUserAction } from '../../actions';

class Authbar extends Component {

    componentDidMount(){
        //console.log('Authbar');
        this.props.authUserAction().then((d) => {
            console.log('user is logged in');
            this.props.loading();
        }).catch(error => {
            console.log('user is not logged in');
            this.props.loading();
        });
    };

    render() {
        return (
            <div></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.user.profile,
    };
}

export default connect(mapStateToProps, {authUserAction})(Authbar);