import React, { useState } from 'react';
import { Header } from '../components/Header';

const siteLinks = [
	{
		href: '/',
		text: 'Home',
	},
	{
		href: '/contact',
		text: 'Contact',
	},
];

const userLinks = {
	guest: [
		{
			href: '/login',
			text: 'Log In',
		},
		{
			href: '/register',
			text: 'Register',
		},
	],
	auth: [
		{
			href: '/profile',
			text: 'Profile',
		},
		{
			href: '/logout',
			text: 'Logout',
		},
	],
};

export const MainLayout = ({ children }) => {
	const [showSidebar, toggleSidebar] = useState(false);

	return (
		<div className={showSidebar && 'overflow-y-hidden h-screen'}>
			<Header
				userLinks={userLinks}
				siteLinks={siteLinks}
				showSidebar={showSidebar || false}
				toggleSidebar={toggleSidebar}
			/>
			<div className='bg-gray-100'>{children}</div>
			<div className='h-screen'></div>
		</div>
	);
};
