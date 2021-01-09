import React from 'react';
import { Button, FormItem } from './components';
import { useForm } from '../hooks/useForm';

export const Newsletter = () => {
	const [data, setData] = useForm({ email: '', first_name: '' });
	const handleSuscribe = (e) => {
		e.preventDefault();
		console.log(data);
		return 1;
		fetch('https://api.mailerlite.com/api/v2/subscribers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-MailerLite-ApiKey': process.env.MAILER_API_KEY,
			},
			body:
				'{"email":"demo@mailerlite.com","name":"John","fields":{"company":"MailerLite"}}',
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className='bg-gray-50'>
			<div className='container md:flex justify-between items-center'>
				<h2 className='text-3xl md:w-96 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
					<span className='block'>You like what</span>
					<span className='block text-primary'>You see?</span>
				</h2>
				<form
					onSubmit={handleSuscribe}
					className='w-full block md:flex justify-center items-center'>
					<div className='md:w-64'>
						<FormItem
							type='text'
							name='first_name'
							placeholder='Nombre'
							handler={setData}
							value={data.first_name}
						/>
					</div>
					<div className='md:w-64 md:ml-4'>
						<FormItem
							type='email'
							name='email'
							placeholder='Email'
							handler={setData}
							value={data.email}
						/>
					</div>
					<Button className='flex-1 md:mb-4 md:ml-4'>Suscribirse</Button>
				</form>
			</div>
		</div>
	);
};
