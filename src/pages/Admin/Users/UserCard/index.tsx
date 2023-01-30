import './styles.css';
import { User } from '../../../../types/user';

type Props = {
    user: User
}

const UserCard = ({ user }: Props) => {

    return (
        <div className='base-card user-crud-card'>
            <div className='user-crud-card-top-container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/800px-Anonymous_emblem.svg.png' alt={user.name} />
            </div>
            <div className='user-crud-card-description'>
                <div className='user-crud-card-bottom-container'>
                    <h6>Nome: {user.name}</h6>
                    <h6>Email: {user.email}</h6>
                </div>
                <div className='user-crud-categories-container'>
                </div>
            </div>
            <div className='user-crud-card-buttons-container'>
            </div>
        </div>
    );
}

export default UserCard;