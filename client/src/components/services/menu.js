import React from 'react';
import './services.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function ServicesMenu() {
    return (
        <div>
            <Typography variant="h5">Menu</Typography>
            <div className="mv-16">
                <Typography variant="h6" gutterBottom>Breakfast</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Idly"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Gari"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Puri"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Bajji"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Punuku"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Dosa"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Masala Dosa"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Tea"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Coffee"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Milk"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="mv-16">
                <Typography variant="h6" gutterBottom>Lunch</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Bajji"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Corn Samosa"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Flavoured Rice"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Veg biryani"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pulav"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Rumali Roti"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Tandoori Roti"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="paneer curry"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Kaju curry"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="White Rice"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Dal thadaka"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Curry one"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Curry two"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Fry one"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Fry two"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Ulavacharu"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Cream"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Sambar"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Papad"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Chips"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Ghee"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Curd"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pickle one"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pickle two"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Ice cream"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Banana"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pan"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="mv-16">
                <Typography variant="h6" gutterBottom>Dinner</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Bajji"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Corn Samosa"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Flavoured Rice"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Veg biryani"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pulav"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Rumali Roti"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Tandoori Roti"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="paneer curry"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Kaju curry"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="White Rice"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Dal thadaka"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Curry one"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Curry two"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Fry one"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Fry two"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Ulavacharu"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Cream"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Sambar"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Papad"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Chips"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Ghee"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Curd"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pickle one"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pickle two"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Ice cream"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Banana"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="collect" value="yes" />}
                            label="Pan"
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default ServicesMenu;