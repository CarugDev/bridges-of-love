import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  turbopack: {
    // Tell Turbopack the workspace root is this project's directory,
    // avoiding the "multiple lockfiles" warning from the parent folder.
    root: path.resolve(__dirname),
  },
}

export default nextConfig
