import { prettifyError, z } from "zod";

const EnvSchema = z.object({
  VITE_TEST: z.string(),
});

const parsed = EnvSchema.safeParse(import.meta.env);

if (!parsed.success) {
  console.error("❌ Invalid env:");
  console.error(prettifyError(parsed.error));
  throw new Error("Invalid frontend environment variables");
}

// console.log("✅ Valid env");

export type Env = z.infer<typeof EnvSchema>;
export const env = parsed.data;
