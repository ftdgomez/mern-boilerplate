import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from './components';

const BlogItem = ({ blogItem, handleBookmark, bookmarks }) => {
	const {
		title,
		subtitle,
		url,
		picture,
		date = 'Time ago...',
		timeRead = '6min read.',
		_id,
	} = blogItem;
	return (
		<div className='flex flex-col-reverse md:grid grid-cols-4 bg-white border rounded-l mb-4'>
			<div className='col-span-1 md:col-span-3 p-4 flex flex-col'>
				<Link to={url}>
					<h4 className='font-extrabold tracking-tight text-lg'>{title}</h4>
					<p className='text-gray-400 text-sm mt-1'>{subtitle}</p>
				</Link>
				<hr className='my-2 block md:hidden' />
				<footer className='pt-1 flex justify-between items-center mt-auto'>
					<p className='text-gray-500 text-sm'>
						{date} · {timeRead}
					</p>
					<div>
						{JSON.stringify(bookmarks).includes(_id) ? (
							<svg
								onClick={() =>
									handleBookmark(bookmarks.filter((e) => e._id !== _id))
								}
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'>
								<path d='M20 24l-6-5.269-6 5.269v-17.411c0-3.547-1.167-5.547-4-6.589h9.938c3.34 0 6.052 2.701 6.062 6.042v17.958z' />
							</svg>
						) : (
							<svg
								onClick={() => handleBookmark([...bookmarks, blogItem])}
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

const Bookmark = ({ bookmarks, handleBookmark, blogItem }) => {
	const { url, _id } = blogItem;
	return (
		<div className='bg-white border p-2 mb-2 flex items-center'>
			<svg
				onClick={() => handleBookmark(bookmarks.filter((e) => e._id !== _id))}
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				className='h-5 w-5 opacity-75'>
				<path d='M20 24l-6-5.269-6 5.269v-17.411c0-3.547-1.167-5.547-4-6.589h9.938c3.34 0 6.052 2.701 6.062 6.042v17.958z' />
			</svg>
			<Link title={url} to={url}>
				{url.slice(0, 24)}...
			</Link>
		</div>
	);
};

export const BlogFeed = ({
	title,
	blogItems,
	withBookmarks,
	withAside,
	children,
}) => {
	const [bookmarks, handleBookmarks] = useState([]);

	useEffect(() => {
		const localBookmarks = localStorage.getItem('bookmarks');
		if (localBookmarks) {
			handleBookmarks(localBookmarks.split(','));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('bookmarks', bookmarks.toString());
	}, [bookmarks]);

	return (
		<div className='container flex flex-col-reverse md:grid grid-cols-4 gap-4'>
			<main className='col-span-3 '>
				<h2 className='text-3xl font-extrabold mb-4 p-4 bg-white border'>
					{title}
				</h2>
				{blogItems.map((blogItem) => (
					<BlogItem
						key={blogItem._id}
						blogItem={blogItem}
						handleBookmark={handleBookmarks}
						bookmarks={bookmarks}
					/>
				))}
			</main>

			{withAside && (
				<aside>
					{withBookmarks && (
						<>
							<h4 className='title p-4 bg-white border rounded mb-2'>
								Your Bookmarks
							</h4>
							{bookmarks.length > 0 ? (
								bookmarks.map((bookmark) => (
									<Bookmark
										handleBookmark={handleBookmarks}
										bookmarks={bookmarks}
										key={bookmark._id}
										blogItem={bookmark}
									/>
								))
							) : (
								<div className='p-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='text-gray-500 block mx-auto w-10 h-10 mb-4'
										fill='currentColor'
										width='24'
										height='24'
										viewBox='0 0 24 24'>
										<path d='M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z' />
									</svg>
									<p className='text-center text-sm'>
										ups! it seems like you dont have any bookmarks yet
									</p>
								</div>
							)}
						</>
					)}
					{children}
				</aside>
			)}
		</div>
	);
};

BlogFeed.defaultProps = {
	title: 'Latest News',
	blogItems: [],
};

BlogFeed.propTypes = {
	title: PropTypes.string,
	blogItems: PropTypes.array,
	withBookmarks: PropTypes.bool,
	widthAside: PropTypes.bool,
};

BlogItem.defaultProps = {
	blogItem: {
		title: 'To become happier, ask yourself these two questions every night',
		subtite: 'the one-minute exercise can make aprofound difference',
		picture: '/placeholder.jpg',
		date: 'Long time ago',
		timeRead: '6min read',
	},
	bookmarks: [],
};

BlogItem.propTypes = {
	blogItem: PropTypes.object,
	handleBookmark: PropTypes.func,
	bookmarks: PropTypes.array,
};
