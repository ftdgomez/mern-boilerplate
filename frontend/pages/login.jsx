import React, { useContext, useState, useEffect } from 'react';
import { FormBody, FormItem, FormPage } from '../components/Form';
import { Button } from '../components/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Link } from '../components/Link';
import { useForm } from '../hooks/useForm';
import { UserContext } from '../context/userContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const login = () => {
	const router = useRouter();

	const [values, handleChange] = useForm({
		email: '',
		password: '',
		remember: false,
	});

	const [error, setError] = useState(false);
	const { userInfo, setUserInfo } = useContext(UserContext);
	useEffect(() => {
		if (userInfo || localStorage.getItem('userInfo')) {
			router.push('/');
		}
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (values.email === '' || values.password === '') {
			toast.error('Los campos están vacíos.');
			setError(!error);
		} else {
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const { data } = await axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,
					values,
					config
				);
				setUserInfo(data);
				if (values.remember === 'true') {
					localStorage.setItem('userInfo', JSON.stringify(data));
				}
				router.push('/');
			} catch (error) {
				handleChange({ password: '' });
				setError(true);
				console.log(error);
				toast.error('Email o contraseña inválidos.');
			}
		}
	};

	return (
		<FormPage>
			<main className='col-span-3'>
				<div className='flex items-center justify-center w-full h-full'>
					<FormBody handler={handleSubmit}>
						<Link to='/'>
							<Image src='/logo-default.png' height={123} width={260} />
						</Link>

						<h1 className='text-xl text-gray-700 font-bold'>¡Hola de nuevo!</h1>
						<p className='mb-4 text-gray-500 text-sm'>
							¿No tienes una cuenta? <Link to='/register'>Regístrate</Link>
						</p>
						<FormItem
							name='email'
							type='email'
							placeholder='example@domain.com'
							label='Su Email'
							value={values.email}
							handler={handleChange}
							error={error && values.email === '' && error}
						/>
						<FormItem
							name='password'
							type='password'
							placeholder='************'
							label='Su Contraseña'
							value={values.password}
							handler={handleChange}
							error={error && values.password === '' && error}
						/>
						<div className='flex items-center'>
							<FormItem
								name='remember'
								type='checkbox'
								value={!values.cookies}
								handler={handleChange}
							/>
							<label
								htmlFor='remember'
								className='ml-2 mb-4 block text-sm text-gray-600'>
								Recuérdame
							</label>
						</div>
						<Button>Iniciar Sesión</Button>
					</FormBody>
				</div>
			</main>
			<aside className='col-span-5 bg-secondary hidden md:block'></aside>
		</FormPage>
	);
};

export default login;
