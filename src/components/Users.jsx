import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const apiUrl = 'http://localhost:8765/';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`${apiUrl}get/users.json`);
            // console.log(res.data);
            setUsers(res.data.users);
        };
        fetchUsers();
    }, []);

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.name_last}</p>
                </div>
            ))}
        </>
    );
};

export default Users;