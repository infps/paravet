'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'case-manager' | 'senior-case-manager' | 'vet';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar?: string;
  employeeId?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Jane Doe',
    role: 'case-manager',
    avatar: '/jane.png'
  });
  const [isLoading] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}