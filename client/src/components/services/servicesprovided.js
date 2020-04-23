import React from 'react';
import './services.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ServicesProvided() {
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
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Collect Food Menu"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="perpare" value="yes" />}
                            label="Prepare Food"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="delivery" value="yes" />}
                            label="Delivering the Food"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="supply" value="yes" />}
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
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Flower Decoration"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="perpare" value="yes" />}
                            label="Stage Decoration"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="delivery" value="yes" />}
                            label="Bridal Makeup"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="supply" value="yes" />}
                            label="Bride Groom Makeup"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="supply" value="yes" />}
                            label="Haldi Function"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="supply" value="yes" />}
                            label="Mehendi"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="supply" value="yes" />}
                            label="Sangeeth"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="supply" value="yes" />}
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
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pre Wedding Shoot"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="perpare" value="yes" />}
                            label="Post Wedding Shoot"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="delivery" value="yes" />}
                            label="Album Designing"
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="supply" value="yes" />}
                            label="Save the Date design"
                        />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};
