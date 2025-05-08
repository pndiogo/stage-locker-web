import { createFileRoute } from '@tanstack/react-router';
import { SignUpForm } from '@/components/authentication/RegisterForm';

export const Route = createFileRoute('/signup')({
  component: SignupPage
});

function SignupPage() {
  return (
    <div>
      <SignUpForm />
    </div>
  );
}
