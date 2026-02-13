import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/src/routeTree.gen";
import {
  getQueryClientContext,
} from "./integrations/tanstack-query/root-provider";

export const router = createRouter({
  routeTree,
  context: {
    ...getQueryClientContext(),
    auth: undefined,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  type Register = {
    router: typeof router;
  };
}
