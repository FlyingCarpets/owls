import React, { Component } from 'react';

import Cards from './cards';
import SimpleForm from './simple-form';
import FormikForm from './formik-form';
import FetchingData from './fetch-data';
import { Provider } from './utils/store';

import './App.css';

class App extends Component {
    state = {
        language: 'eng',
        theme: 'dark',
    };

    render() {
        return (
            <Provider value={ this.state }>
                <div className="content-wrapper">
                    <Cards />
                    <FetchingData />
                    <FormikForm />
                    <SimpleForm />
                </div>
            </Provider>
        )
    }
}

export default App;
