import React, { Component } from 'react';
import {
    Button,
    Grid,
    TextField,
} from '@material-ui/core';

class SimpleForm extends Component {
    state = {
        name: null,
        animal: null,
        color: null,
        plant: null,
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    handleChange = name => ({ target: { value } }) => {
        this.setState({ [name]: value });
    };

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                This is a simple form with no form library
                <Grid container spacing={ 16 }>
                    <Grid item xs={ 6 }>
                        <TextField
                            onChange={ this.handleChange('name') }
                            label="Name"
                        />
                        <Button onClick={ this.handleClick }>
                            X
                        </Button>
                    </Grid>
                    <Grid item xs={ 6 }>
                        <TextField
                            onChange={ this.handleChange('animal') }
                            label="Animal"
                        />
                    </Grid>
                    <Grid item xs={ 6 }>
                        <TextField
                            onChange={ this.handleChange('plant') }
                            label="Plant"
                        />
                    </Grid>
                    <Grid item xs={ 6 }>
                        <TextField
                            onChange={ this.handleChange('color') }
                            label="Color"
                        />
                    </Grid>
                </Grid>
                <Button
                    size="medium"
                    color="primary"
                    type="submit"
                    variant="contained"
                >
                    click
                </Button>
            </form>
        );
    }
}

export default SimpleForm;
