import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: (categories?: string[] | null) => void;
  closeModal: () => void;
  selectedCategories: string[] | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[] | null>(null);

  const openModal = (categories?: string[] | null) => {
    setSelectedCategories(categories ?? null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCategories(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, selectedCategories }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
}
