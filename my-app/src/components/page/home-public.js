import React from 'react';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Homepublic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            items: []
        };
    }

    componentDidMount() {
        this.fetchApis();
    };

    fetchApis = () =>{
        this.handleItemsList();
        this.handleItemsLatest();
    }

    handleItemsList = () =>{
        let url = 'https://reqres.in/api/unknown';
        fetch(url).then(response => response.json()).then((lists) => {
            this.setState({
                lists: lists.data
            });
            //toast("Just checked the API");
        });
    };
    handleItemsLatest = () =>{
        let url = 'https://reqres.in/api/unknown';
        fetch(url).then(response => response.json()).then((items) => {
            this.setState({
                items: items.data
            });
            //toast("Just checked the API");
        });
    };


    render() {
        return (
            <div className="">
                <h1>Public Home Page</h1>

                <h3>Recent Items</h3>
                <AppListViewList lists={this.state.lists}/>
                <ToastContainer />

                <h3>Previous Items</h3>
                <AppListViewItems items={this.state.items}/>

            </div>
        );
    }
}


class AppListViewList extends React.Component {

    render(){
        var rows = [];
        this.props.lists.map((list,index) => rows.push(<ListItem key={index} list={list} />))
        return (
            <div className="d-flex w-100">
                {rows}
            </div>
        )
    }
}
AppListViewList.defaultProps = {
    repos: []
};

class ListItem extends React.Component {
    render(){
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex justify-content-between">
                    <h5 className="mb-1">
                        {this.props.list.name}
                    </h5>
                </div>
                <p className="mb-1">{this.props.list.year}</p>
            </div>
        )
    }
}


class AppListViewItems extends React.Component {

    render(){
        var rows = [];
        this.props.items.map((item,index) => rows.push(<AppListViewItem key={index} item={item} />))
        return (
            <div className="d-flex w-100">
                {rows}
            </div>
        )
    }
}
AppListViewItems.defaultProps = {
    repos: []
};

class AppListViewItem extends React.Component {
    render(){
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
               
                <div className="d-flex justify-content-between">
                    <h5 className="mb-1">
                        {this.props.item.name}
                    </h5>
                </div>
                <p className="mb-1">{this.props.item.year}</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        //errorMessage: state.auth.error
    };
}


export default connect(mapStateToProps)(Homepublic);