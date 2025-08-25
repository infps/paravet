"use client";

import Link from "next/link";
import { Button } from "@/components/common";

export default function LockPage() {
  const handleContactUs = () => {
    // TODO: API call / Ask John
    console.log("Contact us clicked");
  };

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-xl font-semibold text-gray-900">
        Account locked temporarily
      </h1>

      <p className="text-sm text-gray-600 leading-relaxed">
        For your security, we've temporarily locked your account due to multiple
        unsuccessful login attempts. Please contact us to unlock your account.
      </p>

      <Button onClick={handleContactUs} variant="primary" size="lg" fullWidth>
        Contact Us
      </Button>

      <div className="text-center text-link">
        <Link
          href="/login"
          className="text-sm text-prussian-blue hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
