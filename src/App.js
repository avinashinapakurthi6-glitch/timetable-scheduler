import React from 'react';
import Scheduler from './components/Scheduler';

function App() {
  return (
    <div style={{
      maxWidth: 600,
      margin: '0 auto',
      padding: 20,
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center' }}>Time Table Scheduler</h1>
      <Scheduler />
    </div>
  );
}

export default App;