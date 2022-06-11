import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { SidebarProvider } from './hooks/useSidebarContext';
import { TimerProvider } from './hooks/useTimerContext';
import './index.css';

ReactDOM.render(
  <TimerProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </TimerProvider>,
  document.getElementById('root'),
);
