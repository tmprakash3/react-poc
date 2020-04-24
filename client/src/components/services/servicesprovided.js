import React from 'react';
import './services.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ServicesProvided(props) {
    
    const [checked, setChecked] = React.useState(true);
    
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Services Provided
            </Typography>
            <div className="mb-16">
                <Typography variant="h6" gutterBottom>
                    Catering
            </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="collectFoodMenu" onChange={props.handleUserInfo} />}
                            label="Collect Food Menu"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="perpareFood" onChange={props.handleUserInfo} />}
                            label="Prepare Food"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="deliveryFood" onChange={props.handleUserInfo} />}
                            label="Delivering the Food"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="supplySuppliers"  onChange={props.handleUserInfo}  />}
                            label="Suppyling the suppliers"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="mb-16">
                <Typography variant="h6" gutterBottom>
                    Event Management
            </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="flowerDecoration"  onChange={props.handleUserInfo} />}
                            label="Flower Decoration"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="stageDecoration" onChange={props.handleUserInfo} />}
                            label="Stage Decoration"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="bridalMakeup" onChange={props.handleUserInfo} />}
                            label="Bridal Makeup"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" value={checked} name="brideMakeup" onChange={props.handleUserInfo} />}
                            label="Bride Groom Makeup"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="haldiFunction" value={checked} onChange={props.handleUserInfo} />}
                            label="Haldi Function"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="mehendi" value={checked} onChange={props.handleUserInfo} />}
                            label="Mehendi"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="sangeeth" value={checked} onChange={props.handleUserInfo} />}
                            label="Sangeeth"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="babyFunction" value={checked} onChange={props.handleUserInfo} />}
                            label="Baby First Bday Celebrations"
                        />
                    </Grid>

                </Grid>
            </div>
            <div className="mb-16">
                <Typography variant="h6" gutterBottom>
                    Video and Photography Package
            </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="preWeddingShoot" value={checked} onChange={props.handleUserInfo} />}
                            label="Pre Wedding Shoot"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="postWeddingShoot" value={checked} onChange={props.handleUserInfo} />}
                            label="Post Wedding Shoot"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="albumDesign" value={checked} onChange={props.handleUserInfo} />}
                            label="Album Designing"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveTheDate" value={checked} onChange={props.handleUserInfo} />}
                            label="Save the Date design"
                        />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};
