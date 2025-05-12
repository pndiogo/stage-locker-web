import { z } from "zod";
import { env } from "@/env";

export interface LoginInput {
  email: string;
  password: string;
}

const LoginResponseSchema = z.object({
  email: z.string().email(),
  id: z.string(),
  token: z.string()
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export async function login({ email, password }: LoginInput): Promise<LoginResponse> {
  const response = await fetch(`${env.VITE_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Invalid email or password');
    }

    if (response.status === 403) {
      throw new Error('Account is not activated');
    }

    if (response.status === 404) {
      throw new Error('Account is not found');
    }

    if (response.status === 429) {
      throw new Error('Too many requests, please try again later');
    }

    if (response.status === 500) {
      throw new Error('Server error, please try again later');
    }

    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody?.message || 'Login failed';
    throw new Error(message);
  }

  const data = await response.json();
  return LoginResponseSchema.parse(data);
}