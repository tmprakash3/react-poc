import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import styles from './services.scss';

class Services extends Component {
    render() {
        return (
            <div>
                <div className="appBar">
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        style={{ padding: "5px 8px" }}>
                        <Grid container item xs={8}>
                            <Typography variant="h6">Services</Typography>
                        </Grid>
                        <Grid container item xs={4} className="order-btn">
                            <Button variant="contained" color="primary">Create Service</Button>
                        </Grid>
                    </Grid>
                </div>
                <div className="card-content">
                <Card className="cardWidth">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/assets/images/food-buffet.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Food Catering
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                        </Button>
                            <Button size="small" color="primary">
                                Learn More
                        </Button>
                        </CardActions>
                    </Card>
                    
                    <Card className="cardWidth">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/assets/images/stage-decorators.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Wedding Planner
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                        </Button>
                            <Button size="small" color="primary">
                                Learn More
                        </Button>
                        </CardActions>
                    </Card>
                    <Card className="cardWidth">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/assets/images/birthday.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Birthday
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                        </Button>
                            <Button size="small" color="primary">
                                Learn More
                        </Button>
                        </CardActions>
                    </Card>
                    <Card className="cardWidth">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/assets/images/birthday.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Birthday
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                        </Button>
                            <Button size="small" color="primary">
                                Learn More
                        </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Services;