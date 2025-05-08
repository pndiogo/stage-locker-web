import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Toaster } from '@/components/ui/sonner';

import { Layout } from '@/components/layout/Layout';
import { Main } from '@/components/layout/Main';
import { Header } from '../components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import TanstackQueryLayout from '../integrations/tanstack-query/layout';

import type { QueryClient } from '@tanstack/react-query';

type MyRouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <Layout>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />

      <Toaster />

      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </Layout>
  )
});
