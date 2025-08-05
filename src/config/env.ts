import { z } from "zod";

import "@dotenvx/dotenvx/config";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.coerce.number().default(3001),
  DATABASE_URL: z.string(),
//   JWT_SECRET: z.string().min(32),
});

const env = envSchema.safeParse(process.env);
if (!env.success) {
  console.error("Invalid environment variables:", env.error.issues);
  process.exit(1);
}

export const envConfig = env.data;
