export const Button = ({ type = null, children }) => {
	return (
		<button
			type={type}
			className='py-2 px-4 bg-primary text-white rounded w-full font-bold hover:bg-secondary transition-colors'>
			{children}
		</button>
	);
};
