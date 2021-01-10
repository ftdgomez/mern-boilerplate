import React from 'react';
import PropTypes from 'prop-types';
import { Link, Button } from './components';

export const Hero = ({ title, subtitle, href, picture, btnText }) => {
	return (
		<Link to={href} title={title}>
			<div className='block md:grid grid-cols-8 bg-primary'>
				<div
					style={{
						backgroundImage: `url(${picture})`,
					}}
					className='col-span-3 h-80 md:h-96 bg-center bg-cover md:bg-100 flex items-end md:items-center'></div>
				<div className='p-4 col-span-3 md:flex flex-col justify-center'>
					<h2 className='bg-white text-4xl font-extrabold p-2 tracking-tight'>
						{title}
					</h2>
					<p className='block p-2 bg-primary text-white'>{subtitle}</p>
					<Button className='text-left p-0 m-0'>{btnText}</Button>
				</div>
			</div>
		</Link>
	);
};

Hero.defaultProps = {
	btnText: 'Read More',
};

Hero.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	href: PropTypes.string,
	picture: PropTypes.string,
	btnText: PropTypes.string,
};
