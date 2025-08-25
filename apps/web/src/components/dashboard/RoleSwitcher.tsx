"use client";

import {
  useUser,
  type UserRole,
  type User,
} from "@/components/providers/user-provider";
import { useToast } from "@/components/providers/toast-provider";
import { Button } from "@/components/common";

const testUsers: User[] = [
  {
    id: "1",
    name: "Jane Doe",
    role: "case-manager",
    avatar: "/jane.png",
  },
  {
    id: "2",
    name: "Jane Doe",
    role: "senior-case-manager",
    avatar: "/jane.png",
  },
  {
    id: "3",
    name: "Marty Davis",
    role: "vet",
    employeeId: "#000001",
    avatar: "/jane.png",
  },
];

export function RoleSwitcher() {
  const { user, setUser } = useUser();
  const { showToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
      <p className="text-sm font-medium mb-2">Test Role Switching:</p>
      <div className="flex gap-2 mb-3">
        {testUsers.map((testUser) => (
          <Button
            key={testUser.id}
            variant={user?.id === testUser.id ? "primary" : "outline"}
            size="sm"
            onClick={() => setUser(testUser)}
          >
            {testUser.role
              .replace("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </Button>
        ))}
      </div>
      
      <p className="text-sm font-medium mb-2">Test Toasts:</p>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => showToast('Success! Operation completed.', 'success')}
        >
          Success
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => showToast('Error! Something went wrong.', 'error')}
        >
          Error
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => showToast('Info: Here is some information.', 'info')}
        >
          Info
        </Button>
      </div>
    </div>
  );
}
