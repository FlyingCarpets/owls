import React, { Component, Fragment } from 'react';
import {
    Grid,
    Card,
    CardContent,
    TextField,
    Paper,
    Button,
} from '@material-ui/core';

function setPostsToState(posts) {
    return function() {
        return { posts };
    }
}

function setPost(name, value) {
    return function() {
        return { [name]: value }
    };
}

class FetchingData extends Component {
    state = {
        posts: [],
        postTitle: null,
        postMessage: null,
    };

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState(setPostsToState(posts)))
            .catch(error => console.log(error));
    };

    handleChange = ({ target: { value, name } }) => {
        this.setState(setPost(name, value));
    };

    handlePostSubmit = () => {
        const {
            postTitle,
            postMessage,
        } = this.state;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: postTitle,
                body: postMessage,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

    render() {
        const { posts } = this.state;

        return (
            <Fragment>

                <Paper>
                    <h3>Post a comment:</h3>
                    <TextField
                        onChange={ this.handleChange }
                        label="Title"
                        name="postTitle"
                    />
                    <TextField
                        onChange={ this.handleChange }
                        label="Message"
                        name="postMessage"
                    />
                    <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={ this.handlePostSubmit }
                    >
                        Submit
                    </Button>
                </Paper>

                <Grid container spacing={ 16 }>
                    { posts.map(post => (
                        <Grid item xs={ 3 } key={ post.id }>
                            <Card>
                                <CardContent>
                                    <h3>{ post.title }</h3>
                                    <p>{ post.body }</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) }
                </Grid>
            </Fragment>
        );
    }
}

export default FetchingData;
