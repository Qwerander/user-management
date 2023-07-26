import { useEffect, useState } from 'react';
import './App.css';
import { IUser, UsersType } from './types/types';
import { UserForm } from './components/userForm/UserForm';
import { UsersTable } from './components/usersTable/UsersTable';

export function App() {
  const [users, setUsers] = useState<UsersType>([]);

  
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index: number) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const editUser = (index: number) => {
    // Реализуйте функциональность изменения пользователя
    // Тут может быть модальное окно с формой для изменения данных пользователя
    // При сохранении изменений, обновите соответствующего пользователя в массиве users
  };

  return (
    <>
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UsersTable users={users} deleteUser={deleteUser} editUser={editUser}/>
    </>
  );
}
