import './styles.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import history from '../../util/history';
import { AuthContext } from '../../AuthContext';
import { getTokenData, isAuthenticated } from '../../util/auth';
import { removeAuthData } from '../../util/storage';

function Navbar() {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {

        console.log('mexeu')

        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            });
        } else {
            setAuthContextData({
                authenticated: false
            })
        }
    }, [setAuthContextData]);

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData({
            authenticated: false
        });
        history.replace('/');
    }

    return (
        <nav className="bg-primary navbar navbar-expand-md main-nav navbar-dark">
            <div className='container-fluid'>
                <Link to="/admin/clients" className="nav-logo-text">
                    <h4>BHUB</h4>
                </Link>
                <div className='nav-login-logout'>
                    {
                        authContextData.authenticated ? (
                            <>
                                <span className='nav-username'>{authContextData.tokenData?.sub.split(' ')[0]}</span>
                                <a href='#logout' onClick={handleLogoutClick}>LOGOUT</a>
                            </>
                        ) : (
                            <Link to='/admin/auth'>LOGIN</Link>
                        )
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
