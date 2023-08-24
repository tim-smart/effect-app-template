/// <reference types="vitest" />
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    include: ["./test/**/*.test.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@app/core/test": path.join(__dirname, "test"),
      "@app/core": path.join(__dirname, "src"),
    },
  },
})
