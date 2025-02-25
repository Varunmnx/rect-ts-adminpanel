import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global `describe`, `test`, etc.
    environment: "jsdom", // Simulates a browser environment
    setupFiles: "./src/test/setup.ts", // Optional setup file
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"], // Custom include pattern
    exclude: ["**/node_modules/**", "**/dist/**"], // Default exclude pattern
  },
});
