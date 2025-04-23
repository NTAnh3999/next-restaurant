import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
  // DB_USER: z.string(),
});
const configProject = configSchema.safeParse({
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  // DB_USER: process.env.DB_USER,
});
if (!configProject.success) {
  console.error(configProject.error.errors);
  throw new Error("Invalid env config");
}
const envConfig = configProject.data;
export default envConfig;
