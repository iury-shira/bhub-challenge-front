import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Auth from './pages/Admin/Auth';
import history from './util/history';

const Routes = () => (
    <Router history={history}>
        <Navbar/>
        <Switch>
            <Redirect from='/admin/auth' to='/admin/auth/login' exact/>
            <Route path='/admin/auth'>
                <Auth/>
            </Route>
            <Redirect from='/admin' to='/admin/clients' exact/>
            <Route path='/admin'>
                <Admin/>
            </Route>
        </Switch>
    </Router>
);

export default Routes;