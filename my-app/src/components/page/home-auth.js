import React from 'react';
import { connect } from 'react-redux';

class Homeauth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <h1>Welcome authenticated user</h1>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        //errorMessage: state.auth.error
    };
}


export default connect(mapStateToProps)(Homeauth);