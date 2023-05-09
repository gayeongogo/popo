import React from 'react';
import Router from './Router';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} />
  );
}

export default App;
