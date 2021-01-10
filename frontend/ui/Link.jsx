import NextLink from 'next/link';
import PropTypes from 'prop-types';

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

Link.defaultProps = {
	to: '/',
};

Link.propTypes = {
	to: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
};
