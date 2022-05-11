import Link from 'next/link';

function Header() {
	return (
		<nav>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href={`${process.env.BLOG_URL}/blog`}>
				<a>Blog</a>
			</Link>
		</nav>
	);
}

export default Header;
