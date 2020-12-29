import React, { useContext, useState } from 'react';
import { FormBody, FormItem, FormPage } from '../components/Form';
import { Button } from '../components/Button';
import Image from 'next/image';
import { StyledLink } from '../components/StyledLink';
import { useForm } from '../hooks/useForm.js';
import { UserContext } from '../context/userContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';
const register = () => {
	const router = useRouter();
	const [values, handleChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
		cookies: false,
		remember: false,
	});

	const [error, setError] = useState(false);
	const { handleUserInfo } = useContext(UserContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			values.email === '' ||
			values.password === '' ||
			values.password2 === '' ||
			values.name === ''
		) {
			toast.error('Todos los campos son obligatorios.');
			setError(true);
		} else if (values.cookies !== 'true') {
			toast.error(
				'Lo siento, debes aceptar las políticas de privacidad para poder crear una cuenta.'
			);
		} else if (values.password !== values.password2) {
			toast.error('Las contraseñas no coinciden.');
			handleChange({ password: '' });
			handleChange({ password2: '' });
		} else {
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const { data } = await axios.post(
					`${process.env.NEXT_PUBLIC_API_URL}/api/users/`,
					values,
					config
				);
				handleUserInfo(data);
				if (values.remember === 'true') {
					localStorage.setItem('userInfo', JSON.stringify(data));
				}
				router.push('/');
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<FormPage>
			<main className='col-span-3'>
				<div className='flex items-center justify-center w-full h-full'>
					<FormBody handler={handleSubmit}>
						<Image src='/logo-default.png' height={123} width={260} />
						<h1 className='text-xl text-gray-700 font-bold'>
							Registrar Una Cuenta Nueva
						</h1>
						<p className='mb-4 text-gray-500 text-sm'>
							¿Ya tienes una cuenta?{' '}
							<StyledLink to='login'>Inicia Sesión</StyledLink>
						</p>
						<FormItem
							name='name'
							type='text'
							placeholder='John Doe'
							label='Su Nombre'
							value={values.name}
							handler={handleChange}
							error={error && values.name === '' && error}
						/>
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
							placeholder='Escriba aquí su contraseña'
							label='Su Contraseña'
							value={values.password}
							handler={handleChange}
							error={error && values.password === '' && error}
						/>
						<FormItem
							name='password2'
							type='password'
							placeholder='Repetir Contraseña'
							label='Repetir Contraseña'
							value={values.password2}
							handler={handleChange}
							error={error && values.password2 === '' && error}
						/>
						<div className='flex items-center'>
							<FormItem
								name='cookies'
								type='checkbox'
								handler={handleChange}
								value={!values.cookies}
							/>
							<label
								htmlFor='cookies'
								className='ml-2 mb-4 block text-sm text-gray-600'>
								Acepto las{' '}
								<StyledLink to='/politicas-de-privacidad'>
									Políticas de privacidad
								</StyledLink>
							</label>
						</div>
						<div className='flex items-center'>
							<FormItem
								name='remember'
								type='checkbox'
								value={!values.remember}
								handler={handleChange}
							/>
							<label
								htmlFor='remember'
								className='ml-2 mb-4 block text-sm text-gray-600'>
								Mantener sesión iniciada
							</label>
						</div>
						<Button>Registrarme</Button>
					</FormBody>
				</div>
			</main>
			<aside className='col-span-5 bg-secondary hidden md:block'></aside>
		</FormPage>
	);
};

export default register;
