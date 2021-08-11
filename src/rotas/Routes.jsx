import React from 'react'
import { Switch,Route,Redirect } from 'react-router'

import Main from '../main/Main'
import Usuario from '../components/forms/usuario/Usuario'

export default props =>

<Switch>
    <Route exact path='/' component={Main}/>
    <Route path='/users' component={Usuario}/>
    <Redirect from='*' to='/'/>
</Switch>