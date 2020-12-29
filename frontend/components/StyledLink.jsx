import Link from 'next/link';

export const StyledLink = ({ to, children }) => {
	return (
		<Link href={to}>
			<a className='inline-block ml font-bold text-primary hover:text-secondary transition-colors'>
				{children}
			</a>
		</Link>
	);
};
