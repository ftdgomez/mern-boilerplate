import Head from 'next/head';

export default function Home() {
	return (
		<div className='bg-primary'>
			<Head>
				<title>Mern Bolerplate Nextjs</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='container'>
				<div className='min-h-screen flex items-center justify-center'>
					<p className='text-white font-bold'>
						Mern Bolerplate - Next js v-1.0.0
					</p>
				</div>
			</main>
		</div>
	);
}
