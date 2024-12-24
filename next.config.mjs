import CompressionPlugin from "compression-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,

  webpack: (config, { isServer }) => {
    // Compression plugin
    if (!isServer) {
      config.plugins.push(
        new CompressionPlugin({
          algorithm: "gzip",
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }

    // Bundle analyzer plugin
    if (process.env.ANALYZE === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "stats.html",
          openAnalyzer: false,
        })
      );
    }

    config.plugins.push(
      new CompressionPlugin({
        test: /\.(js|jsx|css|html|svg)$/, // Compress relevant files
        threshold: 10240, // Only compress files larger than 10kB
      })
    );

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "url-loader",
          options: { limit: 10000 },
        },
      ],
    });

    return config;
  },

  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
};

export default nextConfig;
