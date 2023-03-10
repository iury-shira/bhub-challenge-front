import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../AuthContext';
import ButtonIcon from '../../../../components/ButtonIcon';
import { getTokenData } from '../../../../util/auth';
import { requestBackendLogin } from '../../../../util/requests';
import { saveAuthData } from '../../../../util/storage';
import './styles.css';

type LoginCredentials = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {

    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: '/admin' } };

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);
    
    const { register, handleSubmit, formState: {errors} } = useForm<LoginCredentials>();
    
    const history = useHistory();

    const onSubmit = (formData: LoginCredentials) => {
        requestBackendLogin(formData)
        .then( response => {
            setHasError(false);
            saveAuthData(response.data);
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData(),
            });
            // history.push(from);
            history.replace(from);
        })
        .catch( error => {
            setHasError(true);
        })
    };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className='alert alert-danger'>Erro ao tentar efetuar o login</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
                required: 'Campo obrigatório',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                }
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className='invalid-feedback d-block'>{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
                required: 'Campo obrigatório'
            })}
            type="password"
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
          <div className='invalid-feedback d-block'>{errors.password?.message}</div>
        </div>
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </Link>
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
        <div className="signup-container">
          <span className="not-registered">Não tem Cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">
            CADASTRAR
          </Link>
        </div>
      </form>
    </div>
  );
};


export default Login;