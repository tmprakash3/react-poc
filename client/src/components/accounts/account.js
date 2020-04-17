import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CenterCard363 from '../centerCard363';
import useForm from '../../use-form-react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import '../app.scss';

const Account = () => {
  const [editting, setEditting] = useState(false);
  const [passwordEditting, setPasswordEditting] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [status, setStatus] = useState('');
  const [profile, setProfile] = useState({});
  let options = {
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
      eventmangament: false,
      cateringservices: false,
      foodservice: false,
      oldPassword: '',
      newPassword: ''
    },
    callback: () => {
      updateUserProfile(inputs);
    },
    debug: false
  }

  const { setInputs, onSubmit, onChange, inputs, dirty, reset } = useForm('AdvanceForm', options);
  const tryConnect = () => axios.get(`/auth-ping`).then(r => setStatus(r.data));
  const getUserProfile = () => axios.get(`/user/profile`).then(r => {
    setProfile(r.data)
    console.log(r.data)
    setInputs({
      firstName: r.data.name.first,
      lastName: r.data.name.last,
      email: r.data.email,
      mobile: r.data.phone.number,
      eventmangament: r.data.eventmangament,
      cateringservices: r.data.cateringservices,
      foodservice: r.data.foodservice
    })
    setErrMsg();
  });
  const updateUserProfile = () => {
    console.log("asjkgklasdgnklaskgkasklgksadglsjdsakgblks");
    if (inputs.newPassword && inputs.newPassword !== '' && inputs.oldPassword && inputs.oldPassword !== '') {
      let passwordChangeObj = {
        newPassword: inputs.newPassword,
        oldPassword: inputs.oldPassword
      }
      console.log(passwordChangeObj)
    }
    else {
      delete inputs.oldPassword;
      delete inputs.newPassword;
      axios.post(`/user/profile`, inputs)
        .then(() => cancelForm())
        .catch(e => setErrMsg(`${e.response.data}. Please try it again.`));
    }

  }
  useEffect(() => {
    tryConnect();
    getUserProfile();
  }, [])
  const switchEditting = () => {
    setEditting(!editting)
  }
  const switchPasswordEditting = () => {
    setPasswordEditting(!passwordEditting)
  }
  const cancelForm = () => {
    setEditting(false)
    reset();
    getUserProfile();
  }
  const cancelPasswordForm = () => {
    setPasswordEditting(false);
    reset();
    getUserProfile();
  }

  const renderButtons = () => {
    if (editting) {
      return (<div className="form-group">
        <button disabled={!dirty} type="submit" className="btn-lg btn btn-light btn-block">Save Change</button>
        <button className="btn-lg btn btn-secondary btn-block" onClick={cancelForm}>Cancel</button>
      </div>)
    } else {
      return (<button className="btn btn-primary btn-lg btn-block" onClick={switchEditting}>Update Information</button>)
    }
  }
  const renderPasswordButtons = () => {
    if (passwordEditting) {
      return (<div className="form-group">
        <button disabled={!dirty} type="submit" className="btn-lg btn btn-light btn-block">Save Change</button>
        <button className="btn-lg btn btn-secondary btn-block" onClick={cancelPasswordForm}>Cancel</button>
      </div>)
    } else {
      return (<button className="btn btn-primary btn-lg btn-block" onClick={switchPasswordEditting}>Update Password</button>)
    }
  }
  const renderProfileForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label>First Name:</label>
            <input
              disabled={!editting}
              type='text'
              name="firstName"
              onChange={onChange}
              value={inputs.firstName}
              className="form-control form-control-lg"
              placeholder="First Name"
              required
            />
          </div>

          <div className="form-group col-md-6">
            <label>Last Name:</label>
            <input
              disabled={!editting}
              type='text'
              name="lastName"
              onChange={onChange}
              value={inputs.lastName}
              className="form-control form-control-lg"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Email:</label>
            <input
              disabled
              readOnly
              type='email'
              name="email"
              onChange={onChange}
              value={inputs.email}
              className="form-control form-control-lg"
              placeholder="sample@email.com"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Mobile Number:</label>
            <input

              disabled={!editting}
              type='number'
              name="mobile"
              onChange={onChange}
              value={inputs.mobile}
              className="form-control form-control-lg"
              placeholder="mobile number"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormControlLabel control={<Checkbox name="eventmangament" checked={inputs.eventmangament} onChange={onChange} color="primary" />} id="inlineCheckbox1" label="Event Management" />
            {/* <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name='eventmangament' checked={inputs.eventmangament} value={inputs.eventmangament} onChange={onChange} />
            <label className="form-check-label" for="inlineCheckbox1">Event management</label> */}

          </div>
          <div className="col">
            <FormControlLabel control={<Checkbox name="cateringservices" checked={inputs.cateringservices} onChange={onChange} color="primary" />} id="inlineCheckbox2" label="Catering Services" />
            {/* <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name='cateringservices' checked={inputs.cateringservices} value={inputs.cateringservices} onChange={onChange} />
            <label className="form-check-label" for="inlineCheckbox2">catering services</label> */}

          </div>
          <div className="col">
            <FormControlLabel control={<Checkbox name="foodservice" checked={inputs.foodservice} onChange={onChange} color="primary" />} id="inlineCheckbox3" label="Food Services" />
            {/* <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name='foodservice' checked={inputs.foodservice} value={inputs.foodservice} onChange={onChange} />
            <label className="form-check-label" for="inlineCheckbox3">food service </label> */}
          </div>

        </div>
        {dirty && <div className="form-group">
          <label>Password:</label>
          <input
            type='password'
            name="password"
            onChange={onChange}
            value={inputs.password}
            className={(errMsg) ? "form-control form-control-lg is-invalid" : "form-control form-control-lg"}
            placeholder="your password"
            required
          />
          {(errMsg) && <div className="invalid-feedback">
            {errMsg}
          </div>}
        </div>}
        <div className="btn-half-width" style={{ 'paddingTop': '30px' }}>
          {renderButtons()}
        </div>
      </form>);
  }
  const updatePassword = () => {
    return (
      <form onSubmit={onSubmit}>

        <div className="form-group col-md-12">
          <label>Old Password:</label>
          <input
            type='test'
            name="oldPassword"
            onChange={onChange}
            value={inputs.oldPassword}
            className="form-control form-control-lg"
            placeholder="Old Password"
            required
            disabled={!passwordEditting}
          />
        </div>
        <div className="form-group col-md-12">
          <label>New Password:</label>
          <input
            type='text'
            name="newPassword"
            onChange={onChange}
            value={inputs.newPassword}
            className="form-control form-control-lg"
            placeholder="New Password"
            required
            disabled={!passwordEditting}
          />
        </div>
        <div className="btn-half-width" style={{ 'paddingTop': '30px' }}>
          {renderPasswordButtons()}
        </div>

      </form>
    )
  }
  return (
    <div className="root">
      <Grid container spacing={3} style={{margin: 0}}>
        <Grid item xs={12} md={6}>
        <Card className>
          <div className='card'>
            <h4 className="card-header">
              Account
      </h4>
            <div className='card-body'>
              {/* <p className="text-muted">Server status: {status} ☀</p> */}
              {profile && renderProfileForm()}
            </div>
          </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className="eqHW">
          <div className='card fullHeight'>
            <h4 className="card-header">
              Update Password
        </h4>
            <div className='card-body'>
              {updatePassword()}

            </div>
          </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Account;
