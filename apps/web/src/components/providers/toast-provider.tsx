'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration = 2000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, type, duration };
    
    setToasts((prevToasts) => [...prevToasts, newToast]);
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: string) => void }) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const getToastStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-300 text-green-700';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getIconColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      case 'warning':
        return 'text-yellow-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return (
          <div className={`w-5 h-5 rounded-full bg-green-500 flex items-center justify-center`}>
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'error':
        return (
          <div className={`w-5 h-5 rounded-full bg-red-500 flex items-center justify-center`}>
            <X className="w-3 h-3 text-white" />
          </div>
        );
      case 'warning':
        return (
          <div className={`w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center`}>
            <span className="text-white text-xs font-bold">!</span>
          </div>
        );
      case 'info':
        return (
          <div className={`w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center`}>
            <span className="text-white text-xs font-bold">i</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-w-80 max-w-md p-4 rounded-lg shadow-lg border-l-4 ${getToastStyles(
        toast.type
      )} animate-in slide-in-from-right duration-300`}
    >
      <div className="flex items-start space-x-3">
        {getIcon(toast.type)}
        <div className="flex-1">
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
        <button
          onClick={() => onRemove(toast.id)}
          className={`flex-shrink-0 ${getIconColor(toast.type)} hover:opacity-70 transition-opacity`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}