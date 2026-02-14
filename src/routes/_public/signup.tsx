import { createFileRoute } from "@tanstack/react-router";

import { SignUpForm } from "@/components/sign-up-form";

export const Route = createFileRoute("/_public/signup")({
  component: SignUpPage,
});

function SignUpPage() {
  return <SignUpForm />;
}
