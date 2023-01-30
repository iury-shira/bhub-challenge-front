import { Route, Switch } from 'react-router-dom';

import './styles.css';
import Login from './Login';

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>
                    Cadastre sua empresa na BHUB!
                </h1>
                <p>
                    Coloque sua energia no core da sua empresa, nós cuidamos do trabalho burocrático!
                </p>
            </div>
            <div className='auth-form-container'>
                <Switch>
                    <Route path="/admin/auth/login">
                        <Login />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/admin/auth/signup">
                        <h1>Fluxo de signup</h1>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/admin/auth/recover">
                        <h1>Fluxo de recover</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Auth;