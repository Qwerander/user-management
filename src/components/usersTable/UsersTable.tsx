import { UsersType } from '../../types/types';

interface IUserTable {
  users: UsersType
  editUser: (value: number) => void
  deleteUser: (value: number) => void
}

export const UsersTable = ({ users, editUser, deleteUser }: IUserTable) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => editUser(index)}>Изменить</button>
              <button onClick={() => deleteUser(index)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
