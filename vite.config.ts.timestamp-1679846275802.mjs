// vite.config.ts
import { defineConfig } from "file:///C:/Users/aidyn/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/React%20RS%20School/React-RS-School/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/aidyn/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/React%20RS%20School/React-RS-School/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///C:/Users/aidyn/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/React%20RS%20School/React-RS-School/node_modules/vite-plugin-eslint/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "c8",
      all: true,
      enabled: true,
      // or 'istanbul'
      reporter: ["text"],
      include: ["**/*.{jsx,tsx}"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhaWR5blxcXFxPbmVEcml2ZVxcXFxcdTA0MjBcdTA0MzBcdTA0MzFcdTA0M0VcdTA0NDdcdTA0MzhcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDNFXHUwNDNCXFxcXFJlYWN0IFJTIFNjaG9vbFxcXFxSZWFjdC1SUy1TY2hvb2xcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFpZHluXFxcXE9uZURyaXZlXFxcXFx1MDQyMFx1MDQzMFx1MDQzMVx1MDQzRVx1MDQ0N1x1MDQzOFx1MDQzOSBcdTA0NDFcdTA0NDJcdTA0M0VcdTA0M0JcXFxcUmVhY3QgUlMgU2Nob29sXFxcXFJlYWN0LVJTLVNjaG9vbFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWlkeW4vT25lRHJpdmUvJUQwJUEwJUQwJUIwJUQwJUIxJUQwJUJFJUQxJTg3JUQwJUI4JUQwJUI5JTIwJUQxJTgxJUQxJTgyJUQwJUJFJUQwJUJCL1JlYWN0JTIwUlMlMjBTY2hvb2wvUmVhY3QtUlMtU2Nob29sL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgZXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBlc2xpbnQoKV0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgc2V0dXBGaWxlczogJy4vc3JjL3NldHVwVGVzdHMudHMnLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcHJvdmlkZXI6ICdjOCcsXHJcbiAgICAgIGFsbDogdHJ1ZSxcclxuICAgICAgZW5hYmxlZDogdHJ1ZSwgLy8gb3IgJ2lzdGFuYnVsJ1xyXG4gICAgICByZXBvcnRlcjogWyd0ZXh0J10sXHJcbiAgICAgIGluY2x1ZGU6IFsnKiovKi57anN4LHRzeH0nXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDM0IsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBO0FBQUEsTUFDVCxVQUFVLENBQUMsTUFBTTtBQUFBLE1BQ2pCLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
