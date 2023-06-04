import { useState, useEffect } from 'react';
import JoblyApi from '../api';

const useCurrentUser = () => {
  const initialState = { username: null,
                         firstName: null, 
                         lastName: null, 
                         email: null, 
                         isAdmin: null };

  const [currentUser, setCurrentUser] = useState(initialState);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      const { token, ...rest } = savedUser;
      setCurrentUser(rest);
      JoblyApi.token = token;
    }
  }, []);

  const signupUser = async (signupInfo) => {
    const newToken = await JoblyApi.signupUser(signupInfo);
    JoblyApi.token = newToken;
    const user = await JoblyApi.getUser(signupInfo.username);
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify({ ...user, token: newToken }));
  }

  const loginUser = async (loginInfo) => {
    const newToken = await JoblyApi.loginUser(loginInfo);
    JoblyApi.token = newToken;
    const user = await JoblyApi.getUser(loginInfo.username);
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify({ ...user, token: newToken }));
  }

  const logoutUser = () => {
    JoblyApi.token = null;
    setCurrentUser(initialState);
    localStorage.removeItem("user");
  }

  return [currentUser, signupUser, loginUser, logoutUser];
}

export default useCurrentUser;