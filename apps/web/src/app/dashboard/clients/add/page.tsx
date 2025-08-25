'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/common';
import { useToast } from '@/components/providers';

export default function AddClientPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    referral: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      showToast('Success. New client has been created!', 'success');
      setIsSubmitting(false);
      router.push('/dashboard/clients');
    }, 1000);
  };

  const handleCancel = () => {
    router.push('/dashboard/clients');
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Link href="/dashboard/clients" className="hover:text-prussian-blue">
          Clients List
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">Add New Client</span>
      </div>

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-prussian-blue">
          Add Unassigned Client
        </h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Client Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-2 focus:ring-prussian-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-2 focus:ring-prussian-blue focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email, Phone, and Referral */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-2 focus:ring-prussian-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-2 focus:ring-prussian-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                  Referral
                </label>
                <input
                  type="text"
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-2 focus:ring-prussian-blue focus:border-transparent"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Continue'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}