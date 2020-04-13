import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { verifyUser } from '../../actions/index';

export default function ProtectRouter({ component: Component }) {
    const dispatch = useDispatch();
    return (
        <div>
            <Route render={() => (
                dispatch(verifyUser()) === true ? <Component /> : <Redirect to="/" />
            )}>

            </Route>

        </div>
    )
}
