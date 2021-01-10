import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '../layout/MainLayout';
import { UserContext } from '../context/userContext';

const logout = () => {
	const { setUserInfo } = useContext(UserContext);
	const router = useRouter();
	useEffect(() => {
		localStorage.removeItem('userInfo');
		localStorage.removeItem('bookmarks');
		setUserInfo(null);
		router.push('/');
	}, []);
	return (
		<MainLayout className='h-screen flex items-center justify-center bg-primary'>
			<p className='text-white'>Se está cerrando tu sesión.</p>
		</MainLayout>
	);
};

export default logout;
