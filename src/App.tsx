import styles from './app.module.css';
import { Layout } from './components/layout/Layout';
import { UserForm } from './components/userForm/UserForm';
import { UsersTable } from './components/usersTable/UsersTable';
import { useUsers } from './hooks/useUsers';

export function App() {
  const { users, addUser, deleteUser } = useUsers();

  return (
    <Layout>
      <h1 className={styles.title}>User Management</h1>
      <UserForm addUser={addUser} />
      <UsersTable users={users} deleteUser={deleteUser} />
    </Layout>
  );
}
