import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginWithEmailPassword,
  loginWithGoogle,
  logout
} from './authActions';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEmailLogin = (email, password) => {
    dispatch(loginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  // Memoize the authenticated status to watch for changes
  const isAuthenticated = useMemo(() => {
    return user && user.uid ? true : false;
  }, [user]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.email}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <button onClick={handleEmailLogin}>Login with Email and Password</button>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default App;