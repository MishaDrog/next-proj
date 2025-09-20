/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'img.gsc-game.net'}
        ]
    }
};

export default nextConfig;
