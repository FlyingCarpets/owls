import React from 'react';

import Cards from './cards';
import SimpleForm from './simple-form';
import FormikForm from './formik-form';

import './App.css';

const App = () => (
    <div className="content-wrapper">
        <FormikForm />
        <SimpleForm />
        <Cards />
    </div>
);

export default App;
