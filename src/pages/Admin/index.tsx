import { Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
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
                    <PrivateRoute path="/admin/clients">
                        <Clients/>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/bankaccounts">
                        <BankAccounts />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/users">
                        <Users/>
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;