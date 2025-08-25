"use client";

import { UserProvider } from "@/components/providers/user-provider";
import { ToastProvider, useToast } from "@/components/providers/toast-provider";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { RoleSwitcher } from "@/components/dashboard/RoleSwitcher";
import {
  InfoIcon,
  X,
  CheckCircle,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast } = useToast();
  const currentToast = toasts[0]; // Show the first toast

  const getToastStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-success/20 text-[#1AD598]";
      case "error":
        return "bg-red-400/20 border-red-500 text-red-400";
      default:
        return "bg-blue-400/20 border-blue-500 text-blue-400";
    }
  };

  const getToastIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 />;
      case "error":
        return <AlertCircle />;
      default:
        return <InfoIcon />;
    }
  };

  return (
    <div className="h-screen bg-base-light-gray grid grid-cols-6 overflow-hidden">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <main className="col-span-5 overflow-y-auto">
        <div className="p-6">
          {currentToast && (
            <div
              className={`p-4 rounded-md mb-6 flex items-center justify-between ${getToastStyles(currentToast.type)}`}
            >
              <div className="flex items-center space-x-4">
                {getToastIcon(currentToast.type)}
                <p>{currentToast.message}</p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => removeToast(currentToast.id)}
              >
                <X className="" />
              </div>
            </div>
          )}
          {children}
        </div>
      </main>
      <RoleSwitcher />
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <ToastProvider>
        <DashboardContent>{children}</DashboardContent>
      </ToastProvider>
    </UserProvider>
  );
}
