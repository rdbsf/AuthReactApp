import React from 'react';
import { connect } from 'react-redux';

import {signOutAction} from "../../actions";

class Signout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.signOutAction(this.props.history);
    };

    render() {
        return (
            <div>
                <p>You are signed out. Redirect user...</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}


export default connect(mapStateToProps, {signOutAction})(Signout);