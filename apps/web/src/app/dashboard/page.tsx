"use client";

import { useAuth } from "@/components/auth-provider";
import { ProDashboard } from "@/components/pro/dashboard";

export default function DashboardPage() {
  const { user } = useAuth();  [edited]
  return <ProDashboard user={user} />;
}