/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              port: '',
              pathname: '/wp-content/uploads/2014/09/**',
              hostname: 'https://cdn.photographylife.com'
            },
          ],
        },
      
};

export default nextConfig;
