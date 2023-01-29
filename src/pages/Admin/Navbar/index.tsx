import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="admin-nav-container">
            <ul>
                <li>
                    <NavLink to="/admin/clients" className="admin-nav-item">
                        <p>Clientes</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/bankaccounts" className="admin-nav-item">
                        <p>Contas Bancárias</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/users" className="admin-nav-item">
                        <p>Usuarios</p>
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;