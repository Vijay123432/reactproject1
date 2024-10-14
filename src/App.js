import React from 'react';
import MainContent from './MainContent';
import { Provider } from 'react-redux';
import store from './store';

// Top-level component
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My App</h1>
        <MainContent />
      </div>
    </Provider>
  );
};

export default App;