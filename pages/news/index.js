import Link from 'next/link';
import { Fragment } from 'react';
function NewsPage() {
	return (
		<Fragment>
			<h1>The News page</h1>
			<ul>
				<li>
					<Link href='/news/nextjs-is-a-great-framework'>
						NextJs Is a Great Framework
					</Link>
				</li>
				<li>
					<Link href='/news/something-else'>Something Else</Link>
				</li>
			</ul>
		</Fragment>
	);
}

export default NewsPage;
