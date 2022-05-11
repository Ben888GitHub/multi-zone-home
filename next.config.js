// const { BLOG_URL } = process.env;

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
				destination: `${process.env.BLOG_URL}/blog`
			},
			{
				source: '/blog/:path*',
				destination: `${process.env.BLOG_URL}/blog/:path*`
			}
		];
	}
};

module.exports = nextConfig;
