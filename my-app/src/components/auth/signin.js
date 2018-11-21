import React, { Component } from 'react';
import { Field, FieldGroup, reduxForm } from 'redux-form';
import { signInAction, authUserAction } from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submit = (values) => {
        this.props.signInAction(values, this.props.history)
            .then((response) => {
                this.props.errorMessage = false;
                this.props.authUserAction();
            }).catch(() => {
                console.log('catch signInAction error here');
            });
    };

    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="info-red">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="form">
                <div className="container">
                    <h2>Sign In</h2>
                    <p>Please enter your login credentials below.</p>

                    {
                        this.props.errorMessage && 
                        <div className="alert alert-danger">
                            {this.errorMessage()}
                        </div>
                    }

                    <form onSubmit={ handleSubmit(this.submit) }>
                        <div className="form-group">
                            <Field name="email"
                                component="input"
                                type="text"
                                placeholder="Email"
                                defaultValue="test@test.com"
                                style={{width: '200px'}}
                            />
                        </div>
                        <div className="form-group">
                            <Field name="password"
                                component="input"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <button type="submit" className="btn btn-primary blue">Sign In</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}


const reduxFormSignin = reduxForm({
    form: 'signin'
})(Signin);

export default connect(mapStateToProps, {signInAction, authUserAction})(reduxFormSignin);