import React, { useEffect } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-labelledby="slide-over-title" 
      role="dialog" 
      aria-modal="true"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Drawer Content */}
      <div className="fixed inset-y-0 left-0 flex max-w-full">
        <div 
          className={`relative w-screen max-w-xs transform transition ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="h-full flex flex-col overflow-y-auto bg-background shadow-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};