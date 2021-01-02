import React, { useContext, useEffect } from 'react';
import { Link } from '../components/Link';
import { UserContext } from '../context/userContext';
import Image from 'next/image';
import styles from '../navSidebar.module.css';

export const Header = ({
	siteLinks = [],
	userLinks = [],
	showSidebar,
	toggleSidebar,
}) => {
	const { userInfo, setUserInfo } = useContext(UserContext);

	useEffect(() => {
		if (localStorage.getItem('userInfo') && !userInfo) {
			setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
		}
	}, [userInfo, setUserInfo]);

	return (
		<div className='border-b bg-white shadow h-20 px-4'>
			<header className='flex justify-between items-center'>
				<Link to='/'>
					<img
						id='siteLogo'
						alt='Logo'
						className='h-20 w-auto'
						src='/logo-default.png'
					/>
				</Link>

				<button
					className='block text-white bg-gray-800 p-3 rounded-full md:hidden'
					onClick={() => toggleSidebar(!showSidebar)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='h-5 w-5'>
						<path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
					</svg>
				</button>
				<div
					className={styles.bgToggler}
					active={showSidebar.toString()}
					onClick={() => toggleSidebar(!showSidebar)}></div>
				<nav className={styles.navbar} active={showSidebar.toString()}>
					<div className='border-b block md:hidden'>
						<img
							id='siteLogo'
							alt='Logo'
							className='h-auto w-40'
							src='/logo-default.png'
						/>
					</div>

					{siteLinks.map((link) => (
						<Link key={link.href} to={link.href}>
							{link.text}
						</Link>
					))}
					{!userInfo ? (
						userLinks.guest.map((link) => (
							<Link key={link.href} to={link.href}>
								{link.text}
							</Link>
						))
					) : (
						<>
							<Link to='/logout' className='text-red-400'>
								Logout
							</Link>
							<Link to='/profile' className={styles.profile}>
								<span className='mx-2 text-xs block'>
									Logged as: <b>{userInfo.name}</b>
								</span>
								<Image
									width={32}
									height={32}
									className='rounded-full block'
									src='/placeholder.jpg'
								/>
							</Link>
						</>
					)}
				</nav>
			</header>
		</div>
	);
};
