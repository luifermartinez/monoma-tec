import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const port = env.PORT ? Number(env.PORT) : 3000;

  return {
    plugins: [react()],
    server: {
      port,
    },
  };
});
