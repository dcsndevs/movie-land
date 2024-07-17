import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'))

import { createRoot } from 'react-dom/client';
import App from './App';


const containerd = document.getElementById('root');
const root = createRoot(containerd); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);