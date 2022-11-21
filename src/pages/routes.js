import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import { HomePage } from './homePage'
import { Login } from './login'
import { Pedidos } from './pedidos'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" component={Login} exact/>
            <Route path="/homepage" exact component={HomePage}/>
            <Route path="/pedidos" exact component={Pedidos}/>
        </BrowserRouter>
    )
}