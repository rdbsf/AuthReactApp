import React, { Component } from 'react';
import { Field, FieldGroup, reduxForm } from 'redux-form';
import { signInAction, authUserAction } from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {

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
                console.log('catch signUpAction error here');
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
                    <h2>Sign Up</h2>
                    <p>Please enter your credentials below to register.</p>
                    <p>@TODO</p>

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
                            <button type="submit" disabled="true" className="btn btn-primary blue">Sign Up</button>
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


const reduxFormSignup = reduxForm({
    form: 'signup'
})(Signup);

export default connect(mapStateToProps, {signInAction, authUserAction})(reduxFormSignup);