'use client';

import { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/common';

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState('assigned');
  const [searchQuery, setSearchQuery] = useState('');

  const clientsData = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Marty James",
    data: Array(5).fill("Data Point")
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-prussian-blue">Clients</h1>
        <Button variant="primary" icon="plus" iconPosition="left" asChild>
          <Link href="/dashboard/clients/add">
            Add New Client
          </Link>
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('assigned')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'assigned'
                ? 'border-prussian-blue text-prussian-blue'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Assigned
          </button>
          <button
            onClick={() => setActiveTab('unassigned')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'unassigned'
                ? 'border-prussian-blue text-prussian-blue'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Unassigned
          </button>
        </nav>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prussian-blue focus:border-transparent"
          />
        </div>
        <Button variant="outline" icon="chevron-down" iconPosition="right">
          Filters
        </Button>
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Data</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Data</th>
                <th className="w-10 py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {clientsData.map((client, index) => (
                <tr key={client.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">{client.name}</td>
                  {client.data.map((data, dataIndex) => (
                    <td key={dataIndex} className="py-4 px-6 text-sm text-gray-600">{data}</td>
                  ))}
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
                      <span className="text-lg">⋮</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
          <Button variant="outline" size="sm">
            ← Previous
          </Button>
          <span className="text-sm text-gray-600">Page 1 of 6</span>
          <Button variant="outline" size="sm">
            Next →
          </Button>
        </div>
      </div>
    </div>
  );
}