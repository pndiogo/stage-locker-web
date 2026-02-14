import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { Routes } from "@/types/router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <nav className="flex gap-4 border-b p-4">
        <a href={Routes.LOGIN} className="text-sm font-medium hover:underline">Login</a>
        <a href={Routes.SIGNUP} className="text-sm font-medium hover:underline">Signup</a>
      </nav>
      <div className="p-6">
        <h1 className="text-3xl font-bold">{t("page.home.title")}</h1>
        <p>{t("page.home.description")}</p>
      </div>
    </div>
  );
}
