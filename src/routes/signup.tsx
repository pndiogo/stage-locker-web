import { createFileRoute } from '@tanstack/react-router';
import { RegisterForm } from '@/components/authentication/RegisterForm';

export const Route = createFileRoute('/signup')({
  component: SignupPage
});

function SignupPage() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
