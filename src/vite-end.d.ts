/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_TEST: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
