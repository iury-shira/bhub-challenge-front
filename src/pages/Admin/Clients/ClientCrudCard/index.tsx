import './styles.css';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../../../util/requests';
import { Client } from '../../../../types/client';

type Props = {
    client: Client;
    onDelete: Function;
}

const ClientCrudCard = ({ client, onDelete }: Props) => {

    const handleDelete = (clientId: number) => {

        if (!window.confirm('Tem certeza que deseja deletar?')) {
            return;
        }

        const config: AxiosRequestConfig = {
            method: 'DELETE',
            url: `/client/${clientId}`,
            withCredentials: true
        };

        requestBackend(config).then(() => {
            onDelete();
        });

    }

    return (
        <div className='base-card client-crud-card'>
            <div className='client-crud-card-top-container'>
                <img src='https://media.licdn.com/dms/image/C4D0BAQFejAoNr0_4qQ/company-logo_200_200/0/1633446733573?e=2147483647&v=beta&t=9lfUOWZoX-xaxLU7Yx3cPuA5y7aXXc3peX4p4aBcuCw' alt={client.corporate_name} />
            </div>
            <div className='client-crud-card-description'>
                <div className='client-crud-card-bottom-container'>
                    <h6>{client.corporate_name}</h6>
                    <h6>Contato: {client.phone_number}</h6>
                    <h6>Declarado: {client.declared_billing}</h6>
                    <h6>Data: {client.created_at.slice(0, 10)}</h6>
                </div>
                <div className='client-crud-categories-container'>
                </div>
            </div>
            <div className='client-crud-card-buttons-container'>
                <button className='btn btn-outline-danger client-crud-card-button' onClick={() => handleDelete(client.id)}>
                    EXCLUIR
                </button>
                <Link to={`/admin/clients/${client.id}`}>
                    <button className='btn btn-outline-secondary client-crud-card-button'>
                        EDITAR
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ClientCrudCard;