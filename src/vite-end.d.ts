/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOG_LEVEL: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent";
  readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}