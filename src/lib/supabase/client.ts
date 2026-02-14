import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { env } from "@/env";

let client: ReturnType<typeof createSupabaseClient> | null = null;

export function createClient() {
  if (client)
    return client;

  client = createSupabaseClient(
    env.VITE_SUPABASE_URL,
    env.VITE_SUPABASE_PUBLISHABLE_KEY,
  );

  return client;
}
