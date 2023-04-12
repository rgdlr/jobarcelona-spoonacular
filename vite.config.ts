import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/jb-sa/",
	envDir: "./env",
	plugins: [react()]
});
