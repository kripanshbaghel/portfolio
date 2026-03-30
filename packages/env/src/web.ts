import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  runtimeEnv: {},
  emptyStringAsUndefined: true,
});
