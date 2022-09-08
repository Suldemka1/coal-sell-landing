/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
