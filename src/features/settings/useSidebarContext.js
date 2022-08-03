import { useContext, useState, createContext } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  return (
    <SidebarContext.Provider value={{
      open,
      setOpen,
      timeoutId,
      setTimeoutId,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext);

export default useSidebarContext;
export { SidebarProvider };
