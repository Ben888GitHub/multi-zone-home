const { NEXT_PUBLIC_BLOG_URL } = process.env;

const nextConfig = {
	// reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: `/:path*`
			},
			{
				source: '/blog',
				destination: `${NEXT_PUBLIC_BLOG_URL}/blog`
			},
			{
				source: '/blog/:path*',
				destination: `${NEXT_PUBLIC_BLOG_URL}/blog/:path*`
			}
		];
	}
};

module.exports = nextConfig;
