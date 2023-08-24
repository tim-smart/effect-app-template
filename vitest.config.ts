/// <reference types="vitest" />

import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    include: ["packages/*/test/**/*.test.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@app/core/test": path.join(__dirname, "packages/core/test"),
      "@app/core": path.join(__dirname, "packages/core/src"),

      "@app/http/test": path.join(__dirname, "packages/http/test"),
      "@app/http": path.join(__dirname, "packages/http/src"),
    },
  },
})
