import './styles.css';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../../../util/requests';
import { BankAccount } from '../../../../types/bankdata';

type Props = {
    bankAccount: BankAccount;
    onDelete: Function;
}

const BankAccountCrudCard = ({ bankAccount, onDelete }: Props) => {

    const handleDelete = (bankAccountId: number) => {

        if (!window.confirm('Tem certeza que deseja deletar?')) {
            return;
        }

        const config: AxiosRequestConfig = {
            method: 'DELETE',
            url: `/bankdata/${bankAccountId}`,
            withCredentials: true
        };

        requestBackend(config).then(() => {
            onDelete();
        });

    }

    return (
        <div className='base-card bank-account-crud-card'>
            <div className='bank-account-crud-card-top-container'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DrbYJ7uPToLQFE0vMolHmlW80oWDu8aV2Q&usqp=CAU' alt={bankAccount.account} />
            </div>
            <div className='bank-account-crud-card-description'>
                <div className='bank-account-crud-card-bottom-container'>
                    <h6>Conta: {bankAccount.account}</h6>
                    <h6>Agência: {bankAccount.agency}</h6>
                    <h6>Banco: {bankAccount.bank}</h6>
                    <h6>Id do Cliente: {bankAccount.owner_id}</h6>
                </div>
                <div className='bank-account-crud-categories-container'>
                </div>
            </div>
            <div className='bank-account-crud-card-buttons-container'>
                <button className='btn btn-outline-danger bank-account-crud-card-button' onClick={() => handleDelete(bankAccount.id)}>
                    EXCLUIR
                </button>
                <Link to={`/admin/bankaccounts/${bankAccount.id}`}>
                    <button className='btn btn-outline-secondary bank-account-crud-card-button'>
                        EDITAR
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default BankAccountCrudCard;