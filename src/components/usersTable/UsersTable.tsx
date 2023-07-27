import { UsersType } from '../../types/types';
import styles from './usersTable.module.css';

interface IUserTable {
  users: UsersType;
  deleteUser: (value: number) => void;
}

export const UsersTable = ({ users, deleteUser }: IUserTable) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <button className={styles.btn} onClick={() => deleteUser(index)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
