import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUserOut } from '../../actions/';


export default function signout() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(signUserOut())
    },[])
    return (
        <div>
            <h1>Hope to see you soon!</h1>
        </div>
    )
}
