import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../layout/MainLayout';
import { Link, Newsletter, Button } from '../../ui/components';

const BlogItem = ({
	title,
	subtitle,
	url,
	picture,
	date = 'Long time ago',
	timeRead = '6min read',
	handleBookmark,
	bookmarks = [],
}) => {
	return (
		<div className='flex flex-col-reverse md:grid grid-cols-4 bg-white border rounded-l mb-4'>
			<div className='col-span-1 md:col-span-3 p-4 flex flex-col'>
				<Link to={url}>
					<h4 className='font-extrabold tracking-tight text-xl'>{title}</h4>
					<p className='text-gray-400'>{subtitle}</p>
				</Link>
				<hr className='my-2 block md:hidden' />
				<footer className=' pt-2 flex justify-between items-center mt-auto'>
					<p className='text-gray-500 '>
						{date} · {timeRead}
					</p>
					<div>
						{bookmarks.includes(url) ? (
							<svg
								onClick={() =>
									handleBookmark(bookmarks.filter((e) => e !== url))
								}
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'>
								<path d='M20 24l-6-5.269-6 5.269v-17.411c0-3.547-1.167-5.547-4-6.589h9.938c3.34 0 6.052 2.701 6.062 6.042v17.958z' />
							</svg>
						) : (
							<svg
								onClick={() => handleBookmark([...bookmarks, url])}
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='text-gray-500 hover:text-gray-800'>
								<path d='M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-.553.576-1.004 1.251-1.316 2h-3.5v17.582l4-3.512 4 3.512v-8.763c.805.19 1.379.203 2 .156zm4-6.475c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z' />
							</svg>
						)}
					</div>
				</footer>
			</div>
			<Link to={url} className='w-full h-full block'>
				<div
					style={{ backgroundImage: `url(${picture || '/placeholder.jpg'})` }}
					className='bg-center bg-cover h-48 md:h-full md:w-full'></div>
			</Link>
		</div>
	);
};

const FeaturedArticle = ({ title, subtitle, picture }) => {
	return (
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
				<Button className='text-left p-0 m-0'>Leer Más</Button>
			</div>
		</div>
	);
};

const Bookmark = ({ url = '/', excerpt }) => {
	return (
		<Link
			title={url}
			to={url}
			className='border p-2 mb-2 bg-white flex items-center'>
			<svg
				onClick={() => handleBookmark(bookmarks.filter((e) => e !== url))}
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				className='h-5 w-5 opacity-75'>
				<path d='M20 24l-6-5.269-6 5.269v-17.411c0-3.547-1.167-5.547-4-6.589h9.938c3.34 0 6.052 2.701 6.062 6.042v17.958z' />
			</svg>
			{excerpt}
		</Link>
	);
};

const index = () => {
	const [bookmarks, handleBookmarks] = useState([]);

	useEffect(() => {
		const localBookmarks = localStorage.getItem('bookmarks');
		if (localBookmarks) {
			handleBookmarks(localBookmarks.split(','));
		}
		console.log('localBookmarks => ', localBookmarks);
	}, []);

	useEffect(() => {
		localStorage.setItem('bookmarks', bookmarks.toString());
		console.log('state bookmarks => ', bookmarks);
	}, [bookmarks]);

	return (
		<MainLayout>
			<Link to='/'>
				<FeaturedArticle
					title='My Overly Simple Rules for a Good Life'
					subtitle='9 rules to live by so you outperform in life.'
					handleBookmark={handleBookmarks}
					bookmarks={bookmarks}
					url='/my-overly-simple-rules-for-a-good-life'
					picture='https://miro.medium.com/max/1000/1*mO-z0rKGLE-cJOGcxRbtGw.jpeg'
				/>
			</Link>

			<div className='container flex flex-col-reverse md:grid grid-cols-4 gap-4'>
				<main className='col-span-3 '>
					<h2 className='text-4xl font-extrabold mb-4 p-2 bg-white border'>
						Nuestro Últimos Artículos:
					</h2>
					<BlogItem
						title='To Become Happier, Ask Yourself These Two Questions Every Nigh'
						subtitle='The one-minute exercise can make a profound difference'
						handleBookmark={handleBookmarks}
						bookmarks={bookmarks}
						url='/to-become-happier-ask-yourself-these-two-questions-every-night'
						picture='https://miro.medium.com/fit/c/200/133/1*tAXQcg0_ZG0jTnrSe5aLrA.jpeg'
					/>
					<BlogItem
						title='10 Fundamental Life Lessons That I Didn’t Learn Until My Thirties'
						subtitle='If you can learn these earlier, you’ll be WAY better off.'
						handleBookmark={handleBookmarks}
						bookmarks={bookmarks}
						url='/10-fundamental-life-lessons-that-i-didnt-learn-until-my-thirties'
						picture='https://miro.medium.com/fit/c/200/133/0*G9s38p-gHtaJYsyf'
					/>
					<BlogItem
						title='My Overly Simple Rules for a Good Life'
						subtitle='9 rules to live by so you outperform in life.'
						handleBookmark={handleBookmarks}
						bookmarks={bookmarks}
						url='/my-overly-simple-rules-for-a-good-life'
						picture='https://miro.medium.com/max/1000/1*mO-z0rKGLE-cJOGcxRbtGw.jpeg'
					/>
				</main>
				<aside>
					<img
						src='/placeholder.jpg'
						title='Espacio publicitario'
						className='mb-4'
					/>
					<h4 className='title p-2 bg-white border rounded mb-2'>
						Your Bookmarks
					</h4>
					{bookmarks.map((bookmark) => (
						<Bookmark
							key={bookmark}
							url={`/blog${bookmark}`}
							excerpt={
								bookmark.length > 24 ? bookmark.slice(0, 24) + '...' : bookmark
							}
						/>
					))}
				</aside>
			</div>
			<Newsletter />
		</MainLayout>
	);
};

export default index;
