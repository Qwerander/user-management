import { useEffect, useState } from "react";
import { IUser, UsersType } from "../types/types";

export const useUsers = () => {
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

  return { users, addUser, deleteUser }
}