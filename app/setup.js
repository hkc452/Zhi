/**
 * Created by hkc on 2016/7/23.
 */
import React, { Component } from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from 'app/App'
import configureStore from 'store/configureStore'
export default class extends Component {

    constructor() {
        console.disableYellowBox = true;
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({isLoading: false})),
        }
    }

    render() {
        if (this.state.isLoading) {
            return null;
        }
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>

        );
    }
}


global.LOG = (...args) => {
    console.log('/------------------------------\\');
    console.log(...args);
    console.log('\\------------------------------/');
    return args[args.length - 1];
};