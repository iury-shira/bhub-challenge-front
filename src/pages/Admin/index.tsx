import { Route, Switch } from 'react-router-dom';
import BankAccounts from './BankAccounts';
import Clients from './Clients';
import Navbar from './Navbar';
import './styles.css';
import Users from './Users';

const Admin = () => {
    return (
        <div className="admin-container">
            <Navbar/>
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/clients">
                        <Clients/>
                    </Route>
                    <Route path="/admin/bankaccounts">
                        <BankAccounts />
                    </Route>
                    <Route path="/admin/users">
                        <Users/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;