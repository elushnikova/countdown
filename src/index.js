import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ConfigProvider } from './features/config/useConfigContext';
import { SidebarProvider } from './features/settings/useSidebarContext';
import TimerProvider from './features/timer/TimerProvider.jsx';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ConfigProvider>
    <TimerProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </TimerProvider>
  </ConfigProvider>,
);
