import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signUserUp} from '../../actions';
import CenterCard363 from '../centerCard363';
import useForm from '../../use-form-react';

const Signup = (props) => {
    const [errMsg, setErrorMsg] = useState('');
    const options = {
        initialValues: {
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': '',
            'password2': '',
            'mobile':'',
            'eventmangament':false,
            'cateringservices':false
           
        },
        callback: () => {
            if (inputs.password == inputs.password2) {
                console.log(inputs);
                props.signUserUp(inputs);
            }else{
                setErrorMsg('password does not matched');
            }
        },
        debug: false
    }
    const { onSubmit, onChange, inputs, dirty, submitting } = useForm('AdvanceForm', options);
    return (
        <CenterCard363>
            <div className='card'>
            <h4 className="card-header">
                Register
            </h4>
            <div className="card-body">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <div class="row">
                <div class="col">
                    <label>First name:</label>
                    <input
                        name="firstName"
                        value={inputs.firstName}
                        type='text'
                        onChange={onChange}
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        required/>
                        
                    </div>
                    <div  class="col">
                    <label>Last name:</label>
                    <input
                        name="lastName"
                        value={inputs.lastName}
                        type='text'
                        onChange={onChange}
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        required/>
                        </div>
                     </div>   
                </div>
                <div className="form-group">
                <div class="row">
                <div class="col">
                <label>Email:</label>
                    <input
                        name="email"
                        value={inputs.email}
                        type='email'
                        onChange={onChange}
                        className="form-control form-control-lg"
                        placeholder="sample@email.com"
                        required/>
                        
                    </div>
                    <div  class="col">
                    <label>Mobile Number:</label>
                    <input 
                        type='number'
                        name="mobile"
                        value={inputs.mobile}
                        onChange={onChange}
                        className="form-control form-control-lg"
                        placeholder="Mobile Number"
                        required/>
                        </div>
                     </div>   
                </div>
                <div className="form-group">
                <div class="row">
                <div class="col">
                <label>Password:</label>
                    <input
                        type='password'
                        name="password"
                        value={inputs.password}
                        onChange={onChange}
                        className="form-control form-control-lg"
                        placeholder="your password"
                        required
                    />
                    </div>
                    <div class="col">
                    <label>Comfirm Password:</label>
                    <label>Comfirm Password:</label>
                    <input
                        type='password'
                        name="password2"
                        value={inputs.password2}
                        onChange={onChange}
                        className="form-control form-control-lg"
                        placeholder="your password again"
                        required/>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                <div class="row">
                <div class="col">
               
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name='eventmangament' value={inputs.eventmangament} onChange={onChange}/>
  <label class="form-check-label" for="inlineCheckbox1">Event management</label>

</div>
<div class="col">

  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">catering services</label>

</div>
<div class="col">

  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
  <label class="form-check-label" for="inlineCheckbox3">food service </label>
</div>

</div>
</div>
                {errMsg && <div className="alert alert-warning">
                    <strong>Oops!
                    </strong> {errMsg}
                </div>}
                <div style={{'paddingTop': '30px'}}>
                    <button
                        type="submit"
                        className="btn btn-lg btn-light btn-block"
                        disabled={!dirty || submitting}>
                        Register
                    </button>
                </div>
            </form>
            </div>
            </div>
        </CenterCard363>
    );
}

export default connect(null, {signUserUp})(Signup);