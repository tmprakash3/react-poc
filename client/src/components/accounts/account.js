import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CenterCard363 from '../centerCard363';
import useForm from '../../use-form-react';

const Account = () => {
  const [editting, setEditting] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [status, setStatus] = useState('');
  const [profile, setProfile] = useState({});
  const options = {
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
      eventmangament: false,
      cateringservices: false,
      foodservice:false
    },
    callback: () => {
      updateUserProfile(inputs)
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
      eventmangament:r.data.eventmangament,
      cateringservices:r.data.cateringservices,
      foodservice:r.data.foodservice
    })
    setErrMsg();
  });
  const updateUserProfile = () => {
    axios.post(`/user/profile`, inputs)
      .then(() => cancelForm())
      .catch(e => setErrMsg(`${e.response.data}. Please try it again.`));
  }
  useEffect(() => {
    tryConnect();
    getUserProfile();
  }, [])
  const switchEditting = () => {
    setEditting(!editting)
  }
  const cancelForm = () => {
    setEditting(false)
    reset();
    getUserProfile();
  }
  const isChecked = () => {
    alert(input.eventmangament)
    if(inputs.eventmangament===true) {
      return true
    }
    else {
      return false
    }
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

            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name='eventmangament' checked={inputs.eventmangament} value={inputs.eventmangament} onChange={onChange} />
            <label className="form-check-label" for="inlineCheckbox1">Event management</label>

          </div>
          <div className="col">

            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name='cateringservices' checked={inputs.cateringservices} value={inputs.cateringservices} onChange={onChange} />
            <label className="form-check-label" for="inlineCheckbox2">catering services</label>

          </div>
          <div className="col">

            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name='foodservice' checked={inputs.foodservice} value={inputs.foodservice} onChange={onChange} />
            <label className="form-check-label" for="inlineCheckbox3">food service </label>
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
        <div style={{ 'paddingTop': '30px' }}>
          {renderButtons()}
        </div>
      </form>);
  }
  return (
    <CenterCard363>
      <div className='card border-secondary'>
        <h4 className="card-header">
          Account
      </h4>
        <div className='card-body'>
          <p className="text-muted">Server status: {status} ☀</p>
          {profile && renderProfileForm()}
        </div>
      </div>
    </CenterCard363>
  );
}

export default Account;
