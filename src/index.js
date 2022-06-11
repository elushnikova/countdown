import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { ConfigProvider } from './hooks/useConfigContext';
import { SidebarProvider } from './hooks/useSidebarContext';
import { TimerProvider } from './hooks/useTimerContext';
import './index.css';

ReactDOM.render(
  <ConfigProvider>
    <TimerProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </TimerProvider>
  </ConfigProvider>,
  document.getElementById('root'),
);
