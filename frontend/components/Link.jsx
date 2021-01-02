import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const Link = ({ to, children, className }) => {
	const router = useRouter();
	return (
		<NextLink href={to}>
			<a
				className={`${className && className} ${
					router.pathname === to && 'currentPage'
				}`}>
				{children}
			</a>
		</NextLink>
	);
};
