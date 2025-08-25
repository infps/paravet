"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/common";

export default function VetSetUpPage() {
  const searchParams = useSearchParams();
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setIsValidToken(false);
      return;
    }

    // Token validation logic
    const validateToken = async () => {
      try {
        // Replace with your actual token validation endpoint
        // const response = await fetch('/api/validate-token', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ token }),
        // });

        const response = { ok: true };

        if (response.ok) {
          setIsValidToken(true);
        } else {
          setIsValidToken(false);
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  if (isValidToken === null) {
    return <div>Validating token...</div>;
  }

  if (!isValidToken) {
    return <div>Invalid or missing token</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-gray-900">
        Finish Setting Up Your Account
      </h1>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Marty"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Davis"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="marty@lovedavis@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Password must:
          </p>
          <ul className="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Minimum of 8 characters</li>
            <li>• Must contain 1 of each of the following:</li>
            <ul className="ml-4 space-y-1">
              <li>• Number</li>
              <li>• Special Character</li>
              <li>• Uppercase Character</li>
              <li>• Lowercase Character</li>
            </ul>
          </ul>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree with terms and conditions
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
        >
          Complete Sign Up
        </Button>
      </form>
    </div>
  );
}
