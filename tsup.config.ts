import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    entry: ["src/**/*.ts"],
    format: ["esm"],
    minify: false,
    bundle: false,
    target: "es2022",
    outDir: "dist",
});