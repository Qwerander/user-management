import { FormEvent, useState } from 'react';
import { IUser } from '../../types/types';

interface IUserForm {
  addUser: (value: IUser) => void;
}

export const UserForm = ({ addUser }: IUserForm) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      alert('Пожалуйста, заполните все поля формы');
      return;
    }

    if (!validateEmail(email)) {
      alert('Пожалуйста, введите действительный адрес электронной почты');
      return;
    }
    
    const user = {
      firstName,
      lastName,
      email,
    };
    addUser(user);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const validateEmail = (email: string) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};
