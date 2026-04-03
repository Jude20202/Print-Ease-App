"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = login(email, password);
    if (!success) {
      setError("Invalid email or password");
      return;
    }
    const user = JSON.parse(localStorage.getItem("printease_user")!);
    if (user.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/setup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-offwhite px-4">
      <Card className="w-full max-w-md">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Logo size="text-3xl" />
            <p className="text-sm text-gray-500">Sign in to manage your printers</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}

            <Button type="submit" fullWidth>
              Sign In
            </Button>
          </form>

          <div className="w-full border-t pt-4">
            <p className="text-xs text-gray-400 text-center">
              Demo accounts: <br />
              <span className="font-mono">user@printease.com</span> / <span className="font-mono">admin@printease.com</span>
              <br />
              Password: <span className="font-mono">demo123</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
