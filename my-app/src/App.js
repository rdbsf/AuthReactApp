import React from 'react'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/universal/navbar';
import Homepublic from './components/page/home-public';
import Homeauth from './components/page/home-auth';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Secret from './components/auth/secret';
import reducers from './reducers';
import requireAuth from './components/hoc/require_auth';
import noRequireAuth from './components/hoc/no_require_auth';

import {AUTHENTICATED} from './actions';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if (user) {
    store.dispatch({ type: AUTHENTICATED });
}

class AppListViewPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <Provider store={store}>
                <Router>
                   <div className="">
                    <Navbar />
                        <div className="app-container container">    
                            <Route exact path="/" component={noRequireAuth(Homepublic)} />
                            <Route exact path="/welcome" component={requireAuth(Homeauth)} />
                            <Route path="/signin" component={noRequireAuth(Signin)} />
                            <Route path="/signup" component={noRequireAuth(Signup)} />
                            <Route path="/secret" component={requireAuth(Secret)} />
                            <Route path="/signout" component={requireAuth(Signout)} />
                        </div>
                   </div>
                </Router>
            </Provider>
        )
    }

}


export default AppListViewPanel

