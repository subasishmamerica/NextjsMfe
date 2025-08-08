import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Custom webpack configuration for Module Federation
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Import and apply the Module Federation configuration
      const { ModuleFederationPlugin } = require("webpack").container;

      config.plugins.push(
        new ModuleFederationPlugin({
          name: "host",
          filename: "remoteEntry.js",
          remotes: {
            // Add your remote apps here
            remote: "remote@http://localhost:3002/remoteEntry.js",
          },
          exposes: {
            // Expose components or modules from this app
            "./Button": "./src/components/Button",
            "./components": "./src/components/index",
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: false,
              eager: true,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: false,
              eager: true,
            },
          },
        })
      );

      // Add fallback for remote modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
};

export default nextConfig;
