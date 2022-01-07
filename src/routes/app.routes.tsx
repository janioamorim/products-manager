import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import FormProduct from '../pages/FormProduct';
import Home from '../pages/Home';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>        
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newregister" component={FormProduct} />
            <Route path="/list/:type" component={List} />            
        </Switch>
    </Layout>
);

export default AppRoutes;