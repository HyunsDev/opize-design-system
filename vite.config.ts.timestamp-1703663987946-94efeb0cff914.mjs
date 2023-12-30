// vite.config.ts
import { defineConfig } from "file:///Users/hyuns/Documents/GitHub/opize-design-system/node_modules/vite/dist/node/index.js";
import path from "path";
import dts from "file:///Users/hyuns/Documents/GitHub/opize-design-system/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///Users/hyuns/Documents/GitHub/opize-design-system/node_modules/vite-tsconfig-paths/dist/index.mjs";
import react from "file:///Users/hyuns/Documents/GitHub/opize-design-system/node_modules/@vitejs/plugin-react-swc/index.mjs";
var __vite_injected_original_dirname = "/Users/hyuns/Documents/GitHub/opize-design-system";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    tsconfigPaths()
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.tsx"),
      name: "opize-design-system",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "@phosphor-icons/react",
        "**/*.stories.tsx"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled"
        },
        banner: '"use client";',
        interop: "compat"
      }
    },
    ssr: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHl1bnMvRG9jdW1lbnRzL0dpdEh1Yi9vcGl6ZS1kZXNpZ24tc3lzdGVtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaHl1bnMvRG9jdW1lbnRzL0dpdEh1Yi9vcGl6ZS1kZXNpZ24tc3lzdGVtL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oeXVucy9Eb2N1bWVudHMvR2l0SHViL29waXplLWRlc2lnbi1zeXN0ZW0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHJlYWN0KCksXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgdHNjb25maWdQYXRocygpLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50c3gnKSxcbiAgICAgICAgICAgIG5hbWU6ICdvcGl6ZS1kZXNpZ24tc3lzdGVtJyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICAgICAgICAgJ3JlYWN0JyxcbiAgICAgICAgICAgICAgICAncmVhY3QtZG9tJyxcbiAgICAgICAgICAgICAgICAnc3R5bGVkLWNvbXBvbmVudHMnLFxuICAgICAgICAgICAgICAgICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnLFxuICAgICAgICAgICAgICAgICcqKi8qLnN0b3JpZXMudHN4JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlZC1jb21wb25lbnRzJzogJ3N0eWxlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiYW5uZXI6ICdcInVzZSBjbGllbnRcIjsnLFxuICAgICAgICAgICAgICAgIGludGVyb3A6ICdjb21wYXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3NyOiBmYWxzZSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsb0JBQW9CO0FBQ2xXLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxXQUFXO0FBSmxCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsS0FBSztBQUFBLE1BQ0QsT0FBTyxLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQzlDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN6QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ0osU0FBUztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsUUFDekI7QUFBQSxRQUNBLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFDSjtBQUFBLElBQ0EsS0FBSztBQUFBLEVBQ1Q7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
