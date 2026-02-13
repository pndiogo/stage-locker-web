import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import TanstackQueryLayout from "@/integrations/tanstack-query/layout";
import { generatePageMeta } from "@/lib/page-meta";
import i18n, { i18nInitPromise } from "@/src/i18n";

type RouterContext = {
  queryClient: QueryClient;
  auth: undefined;
};

function RootLayout() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        {" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
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
