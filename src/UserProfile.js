import React from 'react';
import UserInfo from './UserInfo';

// Another intermediate component
const UserProfile = () => {
  return (
    <div>
      <h3>User Profile</h3>
      <UserInfo />
    </div>
  );
};

export default UserProfile;