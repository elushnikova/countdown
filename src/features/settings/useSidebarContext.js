import {
  useContext, useState, createContext,
} from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);

  return (
    <SidebarContext.Provider value={{
      open,
      setOpen,
      timeoutId,
      setTimeoutId,
      openSidebar,
      closeSidebar,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);

export default useSidebarContext;
export { SidebarProvider };
