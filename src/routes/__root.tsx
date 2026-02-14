import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanstackQueryLayout from "@/integrations/tanstack-query/layout";
import { generatePageMeta } from "@/lib/page-meta";
import { createClient } from "@/lib/supabase/client";
import i18n, { i18nInitPromise } from "@/src/i18n";

export type RouterContext = {
  queryClient: QueryClient;
  isAuthenticated: boolean;
};

function RootLayout() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  beforeLoad: async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return {
      isAuthenticated: !!user,
    };
  },
  loader: async () => {
    await i18nInitPromise;
    return {
      crumb: i18n.t("page.home.title"),
      meta: {
        title: i18n.t("common.appName"),
        description: i18n.t("common.appDescription"),
      },
    };
  },
  head: (ctx) => {
    const { loaderData } = ctx;
    const { meta } = loaderData || {};
    return {
      meta: generatePageMeta(meta),
    };
  },
});
