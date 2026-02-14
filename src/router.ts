import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/src/routeTree.gen";
import {
  getQueryClientContext,
} from "./integrations/tanstack-query/root-provider";

export const router = createRouter({
  routeTree,
  context: {
    ...getQueryClientContext(),
    isAuthenticated: false,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});
