import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { Routes } from "@/types/router";

export const Route = createFileRoute("/_public")({
  component: PublicLayout,
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: Routes.DASHBOARD,
      });
    }
  },
});

function PublicLayout() {
  return (
    <div className="flex min-h-svh w-full flex-col">
      <nav className="flex gap-4 border-b p-4">
        <a href={Routes.LOGIN} className="text-sm font-medium hover:underline">Login</a>
        <a href={Routes.SIGNUP} className="text-sm font-medium hover:underline">Signup</a>
      </nav>
      <div className="flex flex-1 items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
