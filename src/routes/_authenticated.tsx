import { createFileRoute, Outlet, redirect, useRouter } from "@tanstack/react-router";

import { createClient } from "@/lib/supabase/client";
import { Routes } from "@/types/router";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: Routes.LOGIN,
      });
    }
  },
});

function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    await router.invalidate();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="text-sm font-medium hover:underline text-left"
    >
      Logout
    </button>
  );
}

function AuthenticatedLayout() {
  return (
    <div className="flex min-h-svh">
      <aside className="flex w-64 flex-col justify-between border-r p-4">
        <nav className="flex flex-col gap-2">
          <a href={Routes.DASHBOARD} className="text-sm font-medium hover:underline">Dashboard</a>
          <a href={Routes.PROFILE} className="text-sm font-medium hover:underline">Profile</a>
          <LogoutButton />
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
