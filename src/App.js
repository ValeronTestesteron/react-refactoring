import React from 'react';
import styles from '../styles/app.module.css';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <Component
        id="1"
        options={{
          params: {
            fields: {
              isDynamic: true,
            },
          },
        }}
        count={10}
        color="4"
        data="5"
      />
    </div>
  );
}

export default App;
