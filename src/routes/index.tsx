import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '@/components/authentication/LoginForm';
import { RegisterForm } from '@/components/authentication/RegisterForm';

export const Route = createFileRoute('/')({
  component: App
});

function App() {
  return (
    <div>
      <LoginForm></LoginForm>
      <RegisterForm></RegisterForm>
    </div>
  );
}
