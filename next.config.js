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
				destination: `https://multi-zone-blog-rose.vercel.app/blog`
			},
			{
				source: '/blog/:path*',
				destination: `https://multi-zone-blog-rose.vercel.app/blog/:path*`
			}
		];
	}
};

module.exports = nextConfig;
