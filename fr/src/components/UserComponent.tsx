// components/UserComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/index';
import { setUser, removeUser } from './redux/userSlice';

const UserComponent: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = () => {
    const dynamicUserData = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'admin',
      preferences: {
        theme: 'dark',
        notifications: true,
      },
    };
    dispatch(setUser(dynamicUserData));
  };

  const handleLogout = () => {
    dispatch(removeUser()); // Clear user
  };

  return (
    <div>
      <h1>User Management</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre> {/* Display user data */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>No user logged in</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
