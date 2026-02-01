import { createContext, useContext, useState, ReactNode } from "react";

interface DemoDialogContextType {
  isOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
  setIsOpen: (open: boolean) => void;
}

const DemoDialogContext = createContext<DemoDialogContextType | undefined>(undefined);

export const DemoDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDemo = () => setIsOpen(true);
  const closeDemo = () => setIsOpen(false);

  return (
    <DemoDialogContext.Provider value={{ isOpen, openDemo, closeDemo, setIsOpen }}>
      {children}
    </DemoDialogContext.Provider>
  );
};

export const useDemoDialog = () => {
  const context = useContext(DemoDialogContext);
  if (!context) {
    throw new Error("useDemoDialog must be used within a DemoDialogProvider");
  }
  return context;
};
