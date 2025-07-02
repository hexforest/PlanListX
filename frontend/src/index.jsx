import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>📝 Notes Dashboard</h1>
    <p>Welcome to your Electron + React Notes App!</p>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
