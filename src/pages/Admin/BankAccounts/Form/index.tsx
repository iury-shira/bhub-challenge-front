import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { BankAccount } from '../../../../types/bankdata';
import { requestBackend } from '../../../../util/requests';
import './styles.css';

type UrlParams = {
    bankAccountId: string;
    ownerId: string;
};

const Form = () => {

    const { bankAccountId, ownerId } = useParams<UrlParams>();

    // const isEditing = bankAccountId !== 'create';
    const isEditing = typeof ownerId === 'undefined';

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<BankAccount>();

    useEffect(() => {

        if (isEditing) {
            requestBackend(
                { url: `/bankdata/${bankAccountId}`, withCredentials: true }
            )
            .then(
                (response) => {
                    const bankAccount = response.data as BankAccount;
                    setValue('agency', bankAccount.agency);
                    setValue('account', bankAccount.account);
                    setValue('bank', bankAccount.bank);
                    setValue('owner_id', bankAccount.owner_id);
                }
            );
        } else {
            setValue('owner_id', parseInt(ownerId));
        }

    },[isEditing, bankAccountId, setValue]);

    const onSubmit = (formData: BankAccount) => {

        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' : 'POST',
            url: isEditing ? `/bankdata/${bankAccountId}` : '/bankdata',
            data: formData,
            withCredentials: true
        }

        requestBackend(config)
            .then(response => {
                console.log(response.data)
                history.push('/admin/bankaccounts/');
            })
            .catch(error => {
                console.log('ERRO', error);
            })
    };

    const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
        history.push('/admin/bankaccounts');
    };

    return (
        <div className='bank-account-crud-contaner'>
            <div className='base-card bank-account-crud-form-card'>
                <h1 className='bank-account-crud-form-title'>DADOS DA CONTA BANCÁRIA</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row bank-account-crud-inputs-container'>
                        <div className='col-lg-6 bank-account-crud-inputs-left-container'>
                            <div className='margin-bottom-30'>
                                <input
                                    {...register("agency", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.agency ? 'is-invalid' : ''}`}
                                    placeholder="Agencia bancaria"
                                    name="agency"
                                    title='Agencia bancaria'
                                />
                                <div className='invalid-feedback d-block'>{errors.agency?.message}</div>
                            </div>
                            <div className='margin-bottom-30'>
                                <input
                                    {...register("account", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.account ? 'is-invalid' : ''}`}
                                    placeholder="Conta bancaria"
                                    name="account"
                                    title='Conta bancaria'
                                />
                                <div className='invalid-feedback d-block'>{errors.account?.message}</div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='margin-bottom-30'>
                            <input
                                    {...register("bank", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.bank ? 'is-invalid' : ''}`}
                                    placeholder="Banco"
                                    name="bank"
                                    title='Nome do banco'
                                />
                                <div className='invalid-feedback d-block'>{errors.bank?.message}</div>
                            </div>
                            <div className='margin-bottom-30'>
                                <input
                                    {...register("owner_id", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.owner_id ? 'is-invalid' : ''}`}
                                    placeholder="Id do cliente"
                                    name="owner_id"
                                    disabled={true}
                                    title='Id do cliente dono da conta'
                                />
                                <div className='invalid-feedback d-block'>{errors.owner_id?.message}</div>
                            </div>
                        </div>
                    </div>
                    <div className='bank-account-crud-buttons-container'>
                        <button className='btn btn-outline-danger bank-account-crud-button' onClick={handleCancel}>CANCELAR</button>
                        <button className='btn btn-primary bank-account-crud-button text-white'>SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;