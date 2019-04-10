import React, { Component } from 'react';
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from '@material-ui/core';

import { withContext } from './utils/withContext';

import './cards.css';

const cardCount = 9;

class Cards extends Component {
    render() {
        // ready to use as prop
        const { language } = this.props;

        return (
            <Grid container className="container" spacing={ 16 }>
                { [ ...Array(cardCount) ].map(i => (
                    <Grid item xs={ 3 }>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image="https://2.bp.blogspot.com/-CMEcwWYmMkU/Vw6D0sCbpdI/AAAAAAAAB3o/OZzlfAujIf4V5wvyTTVtfy2vAhqi_o7pQCLcB/s600/Pekin%2BDuck.jpg"
                                />
                                <CardContent>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi itaque maxime molestias nihil pariatur, perferendis ratione rerum vel voluptate. Aliquid dolor earum facere, iste nisi nobis officiis quibusdam totam.
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )) }
            </Grid>
        );
    }
}

export default withContext(Cards);
