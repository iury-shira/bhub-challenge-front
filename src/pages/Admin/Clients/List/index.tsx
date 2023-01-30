import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Client } from '../../../../types/client';
import { requestBackend } from '../../../../util/requests';
import ClientCrudCard from '../ClientCrudCard';
import './styles.css';

const List = () => {

    // const [page, setPage] = useState<SpringPage<Product>>();
    const [clients, setClients] = useState<Client[]>();

    useEffect(() => {
        getClients();
    }, []);

    const getClients = () => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/client',
            withCredentials: true
        }

        requestBackend(config)
            .then(
                response => {
                    setClients(response.data);
                    console.log(clients);
                }
            )
            .catch()
    };

    return (
        <div className='client-crud-container'>
            <div className='client-crud-bar-container'>
                <Link to='/admin/clients/create'>
                    <button className="btn btn-primary text-white btn-crud-add">ADICIONAR</button>
                </Link>
                <div className="base-card client-filter-container">Search bar</div>
            </div>
            <div className='row'>
                {
                    clients?.map(client => (
                        <div className='col-sm-6 col-md-12' key={client.id}>
                            <ClientCrudCard client={client} onDelete={() => getClients()}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default List;