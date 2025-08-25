"use client";

import { useUser } from "@/components/providers/user-provider";
import { Button } from "@/components/common";
import Image from "next/image";

export function VetDashboard() {
  const { user } = useUser();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const actionsRequired = [
    {
      title: "Alert Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    },
    {
      title: "Alert Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    },
    {
      title: "Alert Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit risus gravida diam et sapien in ullamcorper.",
    },
  ];

  const recentActivity = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  const statusSteps = [
    { step: "01", title: "Claim Initiated", active: true },
    { step: "02", title: "Claim Preparation", active: false },
    { step: "03", title: "Claim Strategy", active: false },
    { step: "04", title: "Claim Monitoring", active: false },
    { step: "05", title: "Complete", active: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600 mb-1">{getCurrentDate()}</p>
          <h1 className="text-3xl font-bold text-prussian-blue">
            {getGreeting()} {user?.name?.split(" ")[0]}
          </h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Actions Required */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Actions Required
            </h2>
            <div className="space-y-4">
              {actionsRequired.map((action, index) => (
                <div key={index} className="p-4 bg-gray-1 rounded-lg relative">
                  <h3 className="font-medium text-lg text-prussian-blue mb-1">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                  <div className="mt-2">
                    <span className="text-prussian-blue text-sm cursor-pointer absolute right-4 bottom-4 hover:bg-air-blue p-2 rounded-md font-semibold">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Update */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Status Update
            </h2>
            <div className="space-y-4">
              {statusSteps.map((status, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                      status.active
                        ? "bg-prussian-blue text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {status.step}
                  </div>
                  <span
                    className={`text-sm ${
                      status.active
                        ? "text-gray-900 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {status.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Recent Activity
              </h3>
              <div className="space-y-1">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Amount Due & Case Manager */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="text-right mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Amount Due
              </h2>
              <div className="text-4xl font-bold text-prussian-blue">
                $4000.00
              </div>
              <div className="text-sm text-green-600 mt-1">
                Due Dec. 24, 2024
              </div>
            </div>
          </div>

          {/* Unassigned Case Manager Widget */}
          <div className="bg-light-blue rounded-lg mt-6 p-6">
            <div className="flex flex-col items-center space-x-6 mb-4">
              <Image
                src={"/jane.png"}
                height={48}
                width={48}
                className="aspect-square rounded-full w-1/2"
                alt="logo"
              />
              <div className="space-y-6 mt-6">
                <h3 className="text-2xl text-center font-semibold text-prussian-blue">
                  Unassigned Case Manager Widget
                </h3>
                <p className="text-sm mt-1">
                  Sapiente porta dignissim tellus sem. Ullamcorper dictum
                  vestibulum velit quis nonamy tempor rutrum quis non elo. Est
                  sed sed pharetra magna sit nunc.
                </p>
              </div>
            </div>

            <Button variant="primary" fullWidth>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
