import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/product/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;