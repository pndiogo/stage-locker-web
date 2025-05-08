import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App
});

function App() {
  return (
    <div>
      <p>Landing page - nothing to see here for now.</p>
    </div>
  );
}
