import { Link } from './Link';

export const Button = ({ type = null, children, className, href }) => {
	if (href) {
		return (
			<Link
				to={href}
				className={`py-2 px-4 bg-primary text-white rounded w-full font-bold hover:bg-secondary transition-colors ${
					className ? className : undefined
				}`}>
				{children}
			</Link>
		);
	} else {
		return (
			<button
				type={type}
				className={`py-2 px-4 bg-primary text-white rounded w-full font-bold hover:bg-secondary transition-colors ${
					className ? className : undefined
				}`}>
				{children}
			</button>
		);
	}
};
