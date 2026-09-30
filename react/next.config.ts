import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set in CI for GitHub Pages, which serves the site from /<repo-name>
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
