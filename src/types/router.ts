export const Routes = {
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  PROFILE: "/profile",
  ROOT: "/",
  RESEND_VERIFICATION_EMAIL: "/resend-verification-email",
  UPDATE_PASSWORD: "/update-password",
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];
