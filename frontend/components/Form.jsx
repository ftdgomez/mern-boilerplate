import PropTypes from 'prop-types';
import { useEffect } from 'react';
/* ************************************************************************************************************* */

export const FormPage = ({ children }) => {
	return (
		<div className='min-h-screen bg-gray-100 grid grid-cols-1 md:grid-cols-8 w-full'>
			{children}
		</div>
	);
};

/* ************************************************************************************************************* */

export const FormBody = ({ children, handler }) => {
	return (
		<form
			onSubmit={handler}
			className='p-8 m-4 bg-white rounded-lg shadow w-full md:max-w-sm'>
			{children}
		</form>
	);
};

/* ************************************************************************************************************* */

export const FormItem = ({
	label = null,
	type,
	placeholder,
	name,
	value = '',
	handler,
	error,
}) => {
	useEffect(() => {
		console.log('re render');
	}, [error]);
	return (
		<div className='mb-4'>
			{label && (
				<label className='block text-sm text-gray-600 font-bold' htmlFor={name}>
					{label}
				</label>
			)}
			{type === 'checkbox' ? (
				<input
					id={name}
					name={name}
					type='checkbox'
					className='block h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
					onChange={handler}
					value={value}
				/>
			) : (
				<input
					type={type}
					placeholder={placeholder}
					className={`p-2 rounded focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full sm:text-sm border-gray-300 ${
						error ? 'border border-red-800' : 'border'
					}`}
					id={name}
					name={name}
					onChange={handler}
					value={value}
				/>
			)}
		</div>
	);
};

/* ************************************************************************************************************* */

FormItem.propTypes = {
	label: PropTypes.string,
	type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'checkbox']),
	placeholder: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	handler: PropTypes.func,
	error: PropTypes.bool,
};
