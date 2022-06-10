import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { SettingsProvider } from './hooks/useSettingsContext';
import { TimerProvider } from './hooks/useTimerContext';
import './index.css';

ReactDOM.render(
  <TimerProvider>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </TimerProvider>,
  document.getElementById('root'),
);
