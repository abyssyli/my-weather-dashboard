"use client";

import { useAuth } from "@/components/auth-provider";
import { ProDashboard } from "@/components/pro/dashboard";
  [edited]
export default function DashboardPage() {
  const { user } = useAuth();
  return <ProDashboard user={user} />;
}