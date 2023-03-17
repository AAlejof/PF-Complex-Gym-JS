import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postClient } from '../../redux/actions/actions';
import Validate from './Validations';
import { useAuth0 } from '@auth0/auth0-react';

export default function Form() {
	const dispatch = useDispatch();

	const { user } = useAuth0();

	const [input, setInput] = useState({
		user: user.name,
		mail: user.email,
		picture: user.picture,
		about: '',
		name: user.given_name,
		lastName: user.family_name,
		phone: '',
		dni: '',
		age: '',
		height: '',
		weight: '',
		address: '',
		city: '',
		region: '',
		postalCode: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			Validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(Validate(input));
		let error = Validate(input);
		if (Object.values(error).length !== 0) {
			alert('Falta información obligatoria');
		} else {
			dispatch(postClient(input));
			alert('¡Información actualizada correctamente!');
		}
	};

	return (
		<>
			<div className=' relative pt-28 px-10 '>
				<div className='md:grid md:grid-cols-3 md:gap-6 justify-center'>
					<div className='mt-5 md:col-span-2 md:mt-0'>
						<div className='md:col-span-1'>
							<div className='px-4 sm:px-0'>
								<h3 className='text-base font-semibold leading-6 text-gray-900'>
									Perfil
								</h3>
								<p className='mt-1 text-sm text-gray-600'>
									Esta información se mostrará públicamente, así que ten cuidado con lo
									que compartes.
								</p>
							</div>
						</div>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className='shadow sm:overflow-hidden sm:rounded-md'>
								<div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
									<div className='col-span-6 sm:col-span-3'>
										<label
											htmlFor='user'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Nombre de usuario
										</label>
										<input
											type='text'
											name='user'
											id='input'
											value={input.user}
											autoComplete='given-name'
											className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											onChange={handleChange}
										/>
										{errors?.user && (
											<p className=' text-red-500'>
												<i>{errors.user}</i>
											</p>
										)}
									</div>

									<div className='col-span-6 sm:col-span-4'>
										<label
											htmlFor='mail'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Correo electrónico
										</label>
										<input
											type='text'
											name='mail'
											id='mail'
											value={input.mail}
											autoComplete='mail'
											className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											onChange={handleChange}
										/>
										{errors?.mail && (
											<p className=' text-red-500'>
												<i>{errors.mail}</i>
											</p>
										)}
									</div>

									<div>
										<label className='block text-sm font-medium leading-6 text-gray-900'>
											Foto
										</label>
										<div className='mt-2 flex items-center'>
											<span className='inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
												<img src={user.picture} alt='' />
												<path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
											</span>
											<button
												type='button'
												className='ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50'
											>
												Cambiar
											</button>
										</div>
									</div>

									<div>
										{/* <label className='block text-sm font-medium leading-6 text-gray-900'>
											Foto de portada
										</label> */}
										<div className='mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
											<div className='space-y-1 text-center'>
												<svg
													className='mx-auto h-12 w-12 text-gray-400'
													stroke='currentColor'
													fill='none'
													viewBox='0 0 48 48'
													aria-hidden='true'
												>
													<path
														d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
														strokeWidth={2}
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
												<div className='flex text-sm text-gray-600'>
													<label
														htmlFor='picture'
														className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
													>
														<span>Cargar un archivo</span>
														<input
															id='picture'
															name='picture'
															type='file'
															className='sr-only'
															// onChange={handleChange}
														/>
													</label>
													<p className='pl-1'>o arrastrar y soltar</p>
												</div>
												<p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
											</div>
										</div>
									</div>

									<div>
										<label
											htmlFor='about'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Descripción
										</label>
										<div className='mt-2'>
											<textarea
												id='about'
												name='about'
												value={input.about}
												rows={3}
												className='mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6'
												placeholder=' Breve descripción de su perfil'
												defaultValue={''}
												onChange={handleChange}
											/>
										</div>
										<p className='mt-2 text-sm text-gray-500'>URL con hipervínculos.</p>
									</div>
								</div>
								{/* <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
									>
										Guardar
									</button>
								</div> */}
								{/* </div> */}

								{/* </div>
			</div> */}

								<div className='hidden sm:block' aria-hidden='true'>
									<div className='py-5'>
										<div className='border-t border-gray-200' />
									</div>
								</div>

								{/* <div className='mt-10 sm:mt-0 px-10'>
						<div className='md:grid md:grid-cols-3 md:gap-6'> */}
								<div className='md:col-span-1'>
									<div className='px-4 sm:px-0'>
										<h3 className='text-base font-semibold leading-6 text-gray-900'>
											Información Personal
										</h3>
										<p className='mt-1 text-sm text-gray-600'>
											Esta información espara el uso unico y exclusivo de la página
										</p>
									</div>
								</div>
								{/* <div className='mt-5 md:col-span-2 md:mt-0'> */}
								{/* <form onSubmit={(e) => handleSubmitProfile(e)}> */}
								{/* <div className='overflow-hidden shadow sm:rounded-md'> */}
								<div className='bg-white px-4 py-5 sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='name'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Nombre
											</label>
											<input
												type='text'
												name='name'
												id='name'
												value={input.name}
												autoComplete='given-name'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.name && (
												<p className=' text-red-500'>
													<i>{errors.name}</i>
												</p>
											)}
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='lastName'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Apellido
											</label>
											<input
												type='text'
												name='lastName'
												id='lastName'
												value={input.lastName}
												autoComplete='family-name'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.lastName && (
												<p className=' text-red-500'>
													<i>{errors.lastName}</i>
												</p>
											)}
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-3'>
											<label
												htmlFor='phone'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Teléfono
											</label>
											<input
												type='text'
												name='phone'
												id='phone'
												value={input.phone}
												autoComplete='phone'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												placeholder='  Ej: +54 3442 48-0617'
												onChange={handleChange}
											/>
											{errors?.phone && (
												<p className=' text-red-500'>
													<i>{errors.phone}</i>
												</p>
											)}
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-3'>
											<label
												htmlFor='dni'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												DNI
											</label>
											<input
												type='text'
												name='dni'
												id='dni'
												value={input.dni}
												autoComplete='dni'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.dni && (
												<p className=' text-red-500'>
													<i>{errors.dni}</i>
												</p>
											)}
										</div>

										<div className='col-span-6 sm:col-span-2 lg:col-span-2'>
											<label
												htmlFor='age'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Edad
											</label>
											<input
												type='text'
												name='age'
												id='age'
												value={input.age}
												autoComplete='age'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.age && (
												<p className=' text-red-500'>
													<i>{errors.age}</i>
												</p>
											)}
										</div>

										<div className='col-span-6 sm:col-span-2 lg:col-span-2'>
											<label
												htmlFor='weight'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Peso
											</label>
											<input
												type='text'
												name='weight'
												id='weight'
												value={input.weight}
												autoComplete='weight'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												placeholder='  kg'
												onChange={handleChange}
											/>
											{errors?.weight && (
												<p className=' text-red-500'>
													<i>{errors.weight}</i>
												</p>
											)}
										</div>

										<div className='col-span-6 sm:col-span-2 lg:col-span-2'>
											<label
												htmlFor='height'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Estatura
											</label>
											<input
												type='text'
												name='height'
												id='height'
												value={input.height}
												autoComplete='height'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												placeholder='  cm'
												onChange={handleChange}
											/>
											{errors?.height && (
												<p className=' text-red-500'>
													<i>{errors.height}</i>
												</p>
											)}
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='address'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Dirección
											</label>
											<input
												type='text'
												name='address'
												id='address'
												value={input.address}
												autoComplete='address'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
											{errors?.address && (
												<p className=' text-red-500'>
													<i>{errors.address}</i>
												</p>
											)}
										</div>

										<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
											<label
												htmlFor='city'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Ciudad
											</label>
											<input
												type='text'
												name='city'
												id='city'
												value={input.city}
												autoComplete='address-level2'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='region'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												Estado / Provincia
											</label>
											<input
												type='text'
												name='region'
												id='region'
												value={input.region}
												autoComplete='address-level1'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='postalCode'
												className='block text-sm font-medium leading-6 text-gray-900'
											>
												ZIP / Código Postal
											</label>
											<input
												type='text'
												name='postalCode'
												id='postalCode'
												value={input.postalCode}
												autoComplete='postalCode'
												className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>
								<div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
									<button
										disabled={Object.keys(errors).length !== 0}
										type='submit'
										className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
									>
										Guardar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className='hidden sm:block' aria-hidden='true'>
				<div className='py-5'>
					<div className='border-t border-gray-200' />
				</div>
			</div>
		</>
	);
}
