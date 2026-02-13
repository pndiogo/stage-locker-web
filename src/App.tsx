import { RouterProvider } from "@tanstack/react-router";
import { Provider as TanstackQueryProvider } from "@/integrations/tanstack-query/root-provider";
import { router } from "@/src/router";
import "@/src/App.css";

function App() {
  return (
    <TanstackQueryProvider>
      <RouterProvider router={router} />
    </TanstackQueryProvider>
  );
}

export default App;
