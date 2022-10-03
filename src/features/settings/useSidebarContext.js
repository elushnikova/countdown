import {
  useContext, useState, createContext, useEffect,
} from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const closeSidebar = () => setOpen(false);

  useEffect(() => setOpen(true), [setOpen]);

  return (
    <SidebarContext.Provider value={{
      open,
      setOpen,
      timeoutId,
      setTimeoutId,
      closeSidebar,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);

export default useSidebarContext;
export { SidebarProvider };
