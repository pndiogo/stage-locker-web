import { createFileRoute } from "@tanstack/react-router";

import { ForgotPasswordForm } from "@/components/forgot-password-form";

export const Route = createFileRoute("/_public/forgot-password")({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
