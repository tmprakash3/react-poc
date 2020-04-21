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
                        alignItems="center">
                        <Grid container item xs={8}>
                            <Typography variant="h6">Services</Typography>
                        </Grid>
                        <Grid container item xs={4} className="order-btn">
                            <Button variant="contained" color="primary">Create Service</Button>
                        </Grid>
                    </Grid>
                </div>
                <div className="service-content">
                    <div className="service-inner-content">
                        <div className="hero-img-container">
                            <div className="hero-text-content">
                                <h2>Discover the world’s top designers & creatives</h2>
                                <p>Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
                                <a href="" variant="body2" color="primary">Discover Services</a>
                            </div>
                            <div className="img-content">
                                <div className="short-img">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-context">
                    <h4>Our Services</h4>
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
                                <Typography gutterBottom variant="h6" component="h6">
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
                                <Typography gutterBottom variant="h6" component="h6">
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
                                <Typography gutterBottom variant="h6" component="h6">
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
                                <Typography gutterBottom variant="h6" component="h6">
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
            </div>
        );
    }
}

export default Services;