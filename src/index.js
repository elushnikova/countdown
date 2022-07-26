import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { ConfigProvider } from './hooks/useConfigContext';
import { SidebarProvider } from './hooks/useSidebarContext';
import { TimerProvider } from './hooks/useTimerContext';
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
