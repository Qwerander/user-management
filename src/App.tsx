import { useState } from 'react';
import './App.css';
import { IUser, UsersType } from './types/types';
import { UserForm } from './components/userForm/UserForm';
import { UsersTable } from './components/usersTable/UsersTable';

export function App() {
  const [users, setUsers] = useState<UsersType>([]);

  const addUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UsersTable users={users} />
    </div>
  );
}
