/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_TEST: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
