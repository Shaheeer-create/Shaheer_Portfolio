import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/models/",
            publicPath: "/_next/static/models/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
