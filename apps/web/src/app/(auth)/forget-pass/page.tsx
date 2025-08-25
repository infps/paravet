"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/common";

export default function ForgetPasswordPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<
    "input" | "email-sent" | "reset"
  >("input");
  const [email, setEmail] = useState("");
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      setCurrentStep("reset");
    }
  }, [token]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send email
    console.log("Sending reset email to:", email);
    setCurrentStep("email-sent");
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to reset password
    console.log("Resetting password with token:", token);
  };

  const handleResendEmail = () => {
    // TODO: Send email
    console.log("Resending email to:", email);
  };

  // Email input
  if (currentStep === "input") {
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-semibold text-gray-900">Forgot Password</h1>

        <p className="text-sm text-gray-600">
          Enter your email address and we'll send you instructions to reset your
          password.
        </p>

        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
              required
            />
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth>
            Send Reset Instructions
          </Button>
        </form>

        <div className="text-center">
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

  // Email sent
  if (currentStep === "email-sent" && !token) {
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Check Your Email
        </h1>

        <p className="text-sm text-gray-600">
          Please check the email address {email} for instructions to reset your
          password.
        </p>

        <Button
          onClick={handleResendEmail}
          variant="secondary"
          size="lg"
          fullWidth
        >
          Resend Email
        </Button>

        <div className="text-center">
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

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-gray-900">Reset Password</h1>

      <p className="text-sm text-gray-600">
        Please enter and confirm your new password.
      </p>

      <form onSubmit={handlePasswordReset} className="space-y-4">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          Reset Password
        </Button>
      </form>
    </div>
  );
}
