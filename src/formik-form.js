import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import {
    Button,
    Grid,
    TextField,
} from '@material-ui/core';

class FormikForm extends Component {
    handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    render() {
        console.log(this.props);
        return (
            <Formik
                initialValues={{ name: '', animal: '', plant: '', color: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Grid container spacing={ 16 }>
                            <Grid item xs={ 6 }>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    component={ TextField }
                                    label="Name"
                                />
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Field
                                    type="text"
                                    name="animal"
                                    component={ TextField }
                                    label="Animal"
                                />
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Field
                                    type="text"
                                    name="plant"
                                    component={ TextField }
                                    label="Plant"
                                />
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Field
                                    type="text"
                                    name="color"
                                    component={ TextField }
                                    label="Color"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            size="medium"
                            color="primary"
                            type="submit"
                            variant="contained"
                            disabled={ isSubmitting }
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default FormikForm;

// import React from 'react';
// import { withFormik, Field } from 'formik';
// import {
//     Button,
//     Grid,
//     TextField,
// } from '@material-ui/core';
//
// const MyForm = props => {
//     const {
//         values,
//         touched,
//         errors,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//     } = props;
//     return (
//         <form onSubmit={handleSubmit}>
//             <Grid item xs={ 6 }>
//                 <Field
//                     type="text"
//                     id="name"
//                     name="name"
//                     component={ TextField }
//                     onChange={ handleChange }
//                     onBlur={ handleBlur }
//                     value={ values.name }
//                     label="name"
//                 />
//             </Grid>
//             <Grid item xs={ 6 }>
//                 <Field
//                     type="text"
//                     id="animal"
//                     name="animal"
//                     component={ TextField }
//                     onChange={ handleChange }
//                     onBlur={ handleBlur }
//                     value={ values.animal }
//                     label="animal"
//                 />
//             </Grid>
//             { errors.name && touched.name && <div id="feedback">{errors.name}</div> }
//             <button type="submit">Submit</button>
//         </form>
//     );
// };
//
// const FormikForm = withFormik({
//     mapPropsToValues: () => ({ name: '' }),
//
//     // Custom sync validation
//     validate: values => {
//         const errors = {};
//
//         if (!values.name) {
//             errors.name = 'Required';
//         }
//
//         return errors;
//     },
//
//     handleSubmit: (values, { setSubmitting }) => {
//         setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//         }, 1000);
//     },
//
//     displayName: 'BasicForm',
// })(MyForm);
//
// export default FormikForm;
