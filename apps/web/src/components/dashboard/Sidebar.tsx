"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  UserCheck,
  ClipboardList,
} from "lucide-react";
import Image from "next/image";
import { useUser, type UserRole } from "@/components/providers/user-provider";
import { Button } from "@/components/common";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: UserRole[];
}

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
    roles: ["case-manager", "senior-case-manager", "vet"],
  },
  {
    name: "Case Managers",
    href: "/dashboard/case-managers",
    icon: UserCheck,
    roles: ["senior-case-manager"],
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: Users,
    roles: ["case-manager", "senior-case-manager"],
  },
  {
    name: "Claims",
    href: "/dashboard/claims",
    icon: ClipboardList,
    roles: ["vet"],
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
    roles: ["case-manager", "vet"],
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
    roles: ["case-manager", "senior-case-manager", "vet"],
  },
];

const bottomNavigation = [
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
    roles: ["case-manager", "senior-case-manager", "vet"] as UserRole[],
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["case-manager", "senior-case-manager", "vet"] as UserRole[],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  if (!user) return null;

  const filteredNavigation = navigation.filter((item) =>
    item.roles.includes(user.role)
  );
  const filteredBottomNavigation = bottomNavigation.filter((item) =>
    item.roles.includes(user.role)
  );

  const getRoleDisplayName = (role: UserRole) => {
    switch (role) {
      case "case-manager":
        return "Case Manager";
      case "senior-case-manager":
        return "Senior Case Manager";
      case "vet":
        return "Veteran";
      default:
        return role;
    }
  };

  return (
    <div className="h-screen bg-prussian-blue text-white flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="p-6 border-b border-base-light-gray">
        <div className="flex items-center justify-center">
          <Image
            src="/SCG.svg"
            alt="Shillingford Logo"
            width={48}
            height={48}
            className="w-32 aspect-square"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src={user.avatar || "/jane.png"}
              alt={user.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-xs text-blue-200">
              {getRoleDisplayName(user.role)}
            </div>
            {user.employeeId && (
              <div className="text-xs text-blue-200">#{user.employeeId}</div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2 space-y-2">
        {filteredNavigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Button
              key={item.name}
              asChild
              variant={isActive ? "primary-light" : "ghost"}
              size="default"
              fullWidth
              className="flex justify-start hover:bg-air-blue/40"
            >
              <Link href={item.href}>
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </Button>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-4 py-2 border-t border-base-light-gray space-y-2">
        {filteredBottomNavigation.map((item) => {
          const isActive = pathname === item.href;
          const showNotificationBadge =
            item.name === "Notifications" && user.role === "vet";

          return (
            <Button
              key={item.name}
              asChild
              variant={isActive ? "primary-light" : "ghost"}
              size="default"
              fullWidth
              className="hover:bg-air-blue flex p-6 justify-between relative"
            >
              <Link href={item.href}>
                <div className="flex">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </div>
                {showNotificationBadge && (
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs">
                    1
                  </div>
                )}
              </Link>
            </Button>
          );
        })}

        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => {
            // Handle logout
            console.log("Logging out...");
          }}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Log Out
        </Button>
      </div>
    </div>
  );
}
