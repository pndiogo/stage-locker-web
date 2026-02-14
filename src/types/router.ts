export const Routes = {
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  PROFILE: "/profile",
  ROOT: "/",
  UPDATE_PASSWORD: "/update-password",
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];
