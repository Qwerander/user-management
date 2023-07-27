import { IUser } from '../../types/types';
import { useAddUser } from '../../hooks/useAddUser';
import styles from './userForm.module.css';

interface IUserForm {
  addUser: (value: IUser) => void;
}

export const UserForm = ({ addUser }: IUserForm) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    handleSubmit,
  } = useAddUser(addUser);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add new user:</h2>
      <input
        className={styles.input}
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className={styles.input}
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className={styles.input}
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={styles.btn} type='submit'>
        Add
      </button>
    </form>
  );
};
