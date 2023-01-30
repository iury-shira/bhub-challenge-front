import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../../../types/user';
import { requestBackend } from '../../../../util/requests';
import UserCard from '../UserCard';
import './styles.css';

const List = () => {

    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: '/user',
            withCredentials: true
        }

        requestBackend(config)
            .then(
                response => {
                    setUsers(response.data);
                    console.log(users);
                }
            )
            .catch()
    };

    return (
        <div className='user-crud-container'>
            <div className='user-crud-bar-container'>
                <div className="base-card user-filter-container">Search bar</div>
            </div>
            <div className='row'>
                {
                    users?.map(user => {
                        let key = 0;
                        return (
                            <div className='col-sm-6 col-md-12' key={++key}>
                            <UserCard user={user}/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default List;