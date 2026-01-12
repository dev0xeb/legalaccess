import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  modalType: 'category' | 'arbitration' | null;
  openModal: (categories?: string[] | null) => void;
  openArbitrationModal: () => void;
  closeModal: () => void;
  selectedCategories: string[] | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<'category' | 'arbitration' | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[] | null>(null);

  const openModal = (categories?: string[] | null) => {
    setSelectedCategories(categories ?? null);
    setModalType('category');
    setIsOpen(true);
  };

  const openArbitrationModal = () => {
    setModalType('arbitration');
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    setSelectedCategories(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalType, openModal, openArbitrationModal, closeModal, selectedCategories }}>
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
