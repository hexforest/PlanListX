import React from 'react';
import { createRoot } from 'react-dom/client';
import notes from './notes.json';

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>📝 Notes Dashboard</h1>
    <ul>
      {notes.map((note, i) => (
        <li key={i}>{note}</li>
      ))}
    </ul>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
