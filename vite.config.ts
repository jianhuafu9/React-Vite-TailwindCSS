import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 使用 @ 作为 src 的别名
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // additionalData: '@import "@/styles/variables.less";', // 全局变量文件，需要创建此文件
      },
    },
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
