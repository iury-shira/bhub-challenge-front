import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { BankAccount } from '../../../../types/bankdata';
import { requestBackend } from '../../../../util/requests';
import BankAccountCrudCard from '../BankAccountCrudCard';
import './styles.css';

const List = () => {

    const [bankAccounts, setBankAccounts] = useState<BankAccount[]>();

    useEffect(() => {
        getBankAccounts();
    }, []);

    const getBankAccounts = () => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/bankdata',
            withCredentials: true
        }

        requestBackend(config)
            .then(
                response => {
                    setBankAccounts(response.data);
                    console.log(bankAccounts);
                }
            )
            .catch()
    };

    return (
        <div className='bank-account-crud-container'>
            <div className='bank-account-crud-bar-container'>
                <div className="base-card bank-account-filter-container">Search bar</div>
            </div>
            <div className='row'>
                {
                    bankAccounts?.map(bankAccount => (
                        <div className='col-sm-6 col-md-12' key={bankAccount.id}>
                            <BankAccountCrudCard bankAccount={bankAccount} onDelete={() => getBankAccounts()}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default List;