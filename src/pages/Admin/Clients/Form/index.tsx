import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Client } from '../../../../types/client';
import { requestBackend } from '../../../../util/requests';
import './styles.css';

type UrlParams = {
    clientId: string;
};

const Form = () => {

    const { clientId } = useParams<UrlParams>();

    const isEditing = clientId !== 'create';

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Client>();

    useEffect(() => {

        if (isEditing) {
            requestBackend(
                { url: `/client/${clientId}`, withCredentials: true }
            )
            .then(
                (response) => {
                    const client = response.data as Client;
                    setValue('corporate_name', client.corporate_name);
                    setValue('phone_number', client.phone_number);
                    setValue('declared_billing', client.declared_billing);
                }
            );
        }
    },[isEditing, clientId, setValue]);

    const onSubmit = (formData: Client) => {

        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' : 'POST',
            url: isEditing ? `/client/${clientId}` : '/client',
            data: formData,
            withCredentials: true
        }

        requestBackend(config)
            .then(response => {
                console.log(response.data)
                history.push('/admin/clients');
            })
            .catch(error => {
                console.log('ERRO', error);
            })
    };

    const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
        history.push('/admin/clients');
    };

    return (
        <div className='client-crud-contaner'>
            <div className='base-card client-crud-form-card'>
                <h1 className='client-crud-form-title'>DADOS DO CLIENTE</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row client-crud-inputs-container'>
                        <div className='col-lg-6 client-crud-inputs-left-container'>
                            <div className='margin-bottom-30'>
                                <input
                                    {...register("corporate_name", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.corporate_name ? 'is-invalid' : ''}`}
                                    placeholder="Razão social da empresa cliente"
                                    name="corporate_name"
                                />
                                <div className='invalid-feedback d-block'>{errors.corporate_name?.message}</div>
                            </div>
                            <div className='margin-bottom-30'>
                                <input
                                    {...register("phone_number", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.phone_number ? 'is-invalid' : ''}`}
                                    placeholder="Número de telefone do cliente"
                                    name="phone_number"
                                />
                                <div className='invalid-feedback d-block'>{errors.phone_number?.message}</div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div>
                            <input
                                    {...register("declared_billing", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.declared_billing ? 'is-invalid' : ''}`}
                                    placeholder="Renda declarada"
                                    name="declared_billing"
                                />
                                <div className='invalid-feedback d-block'>{errors.declared_billing?.message}</div>
                            </div>
                        </div>
                    </div>
                    <div className='client-crud-buttons-container'>
                        <button className='btn btn-outline-danger client-crud-button' onClick={handleCancel}>CANCELAR</button>
                        <button className='btn btn-primary client-crud-button text-white'>SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;