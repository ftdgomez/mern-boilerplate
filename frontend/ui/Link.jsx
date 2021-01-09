import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const Link = ({ to, children, className, title }) => {
	const router = useRouter();
	return (
		<NextLink href={to}>
			<a
				title={title || undefined}
				className={`${className && className} ${
					router.pathname === to && 'currentPage'
				}`}>
				{children}
			</a>
		</NextLink>
	);
};
