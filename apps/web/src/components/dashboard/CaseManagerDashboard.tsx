'use client';

import { useUser } from '@/components/providers/user-provider';
import { Button } from '@/components/common';

export function CaseManagerDashboard() {
  const { user } = useUser();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const upcomingDeadlines = [
    {
      title: "Alert Goes Here",
      description: "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    },
    {
      title: "Alert Goes Here", 
      description: "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    },
    {
      title: "Alert Goes Here",
      description: "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    }
  ];

  const alerts = [
    {
      title: "Alert Goes Here",
      description: "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    },
    {
      title: "Alert Goes Here",
      description: "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    },
    {
      title: "Alert Goes Here", 
      description: "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    }
  ];

  const clientsData = [
    { name: "Marty James", data: Array(5).fill("Data Point") },
    { name: "Marty James", data: Array(5).fill("Data Point") },
    { name: "Marty James", data: Array(5).fill("Data Point") },
    { name: "Marty James", data: Array(5).fill("Data Point") },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600 mb-1">{getCurrentDate()}</p>
          <h1 className="text-3xl font-bold text-prussian-blue">
            {getGreeting()} {user?.name?.split(' ')[0]}
          </h1>
        </div>
      </div>

      {/* Alerts and Deadlines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-1">{deadline.title}</h3>
                <p className="text-sm text-gray-600">{deadline.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-1">{alert.title}</h3>
                <p className="text-sm text-gray-600">{alert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Overview */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Clients Overview</h2>
          <Button variant="link" size="sm">
            View All →
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Data</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {clientsData.map((client, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 text-sm font-medium text-gray-900">{client.name}</td>
                  {client.data.map((data, dataIndex) => (
                    <td key={dataIndex} className="py-3 text-sm text-gray-600">{data}</td>
                  ))}
                  <td className="py-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <span className="text-lg">⋮</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}