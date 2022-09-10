import React from 'react'
import Home from './Home'
import FormEditarCliente from './FormEditarCliente'
import { Switch, Route } from 'react-router-dom'

function AppRoutes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/editar/:id" component={FormEditarCliente} />
            </Switch>
        </>
    )
}

export default AppRoutes