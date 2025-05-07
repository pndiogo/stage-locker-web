import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '@/components/authentication/LoginForm';

export const Route = createFileRoute('/login')({
  component: LoginPage
});

function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
