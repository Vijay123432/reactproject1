import React from 'react';
import UserProfile from './UserProfile';

// Intermediate component that doesn't use user data
const MainContent = () => {
  return (
    <div>
      <h2>Main Content</h2>
      <UserProfile />
    </div>
  );
};

export default MainContent;