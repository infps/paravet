'use client';

import { useUser } from '@/components/providers/user-provider';
import { CaseManagerDashboard } from '@/components/dashboard/CaseManagerDashboard';
import { SeniorCaseManagerDashboard } from '@/components/dashboard/SeniorCaseManagerDashboard';
import { VetDashboard } from '@/components/dashboard/VetDashboard';

export default function DashboardPage() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  if (!user) {
    return <div className="flex items-center justify-center h-64">Please log in to access the dashboard.</div>;
  }

  switch (user.role) {
    case 'case-manager':
      return <CaseManagerDashboard />;
    case 'senior-case-manager':
      return <SeniorCaseManagerDashboard />;
    case 'vet':
      return <VetDashboard />;
    default:
      return <div className="flex items-center justify-center h-64">Invalid user role.</div>;
  }
}