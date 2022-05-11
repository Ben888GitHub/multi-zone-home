import Link from 'next/link';

function Header() {
	return (
		<nav>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="https://multi-zone-blog-rose.vercel.app/blog" passHref={true}>
				<a>Blog</a>
			</Link>
		</nav>
	);
}

export default Header;
