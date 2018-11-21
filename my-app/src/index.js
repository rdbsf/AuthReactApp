import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppListViewPanel from './App';

export const load = () => {
   ReactDOM.render(<AppListViewPanel />, document.getElementById('root'));
};

load();
