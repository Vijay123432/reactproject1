import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './userSlice';

const UserInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState('light');

  const Change = (e) => {
    const { name, value } = e.target;
    dispatch(updateUser({ [name]: value }));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <input
        type="text"
        name="name"
        value={user.name}
        onChange={Change}
        placeholder="Change name"
      />
      <br/>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={Change}
        placeholder="Change email"
      />
      <br/>
      <button onClick={toggleTheme}>Theme</button>

      <p>Current Theme: {theme === 'light' ? 'Light' : 'Dark'}</p>
    </div>
  );
};

export default UserInfo;
