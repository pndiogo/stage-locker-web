/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOG_LEVEL: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent";
  readonly VITE_API_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}