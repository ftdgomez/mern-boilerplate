import { MainLayout } from '../../layout/MainLayout';
import { Newsletter, Hero, BlogFeed } from '../../ui/components';

const blogItems = [
	{
		title: 'To Become Happier, Ask Yourself These Two Questions Every Night',
		subtitle: 'The one-minute exercise can make a profound difference',
		url: '/to-become-happier-ask-yourself-these-two-questions-every-night',
		picture:
			'https://miro.medium.com/fit/c/200/133/1*tAXQcg0_ZG0jTnrSe5aLrA.jpeg',
		_id: 'blog1',
	},
	{
		title: 'To Become Happier, Ask Yourself These Two Questions Every Night',
		subtitle: 'The one-minute exercise can make a profound difference',
		url: '/to-become-happier-ask-yourself-these-two-questions-every-night',
		picture:
			'https://miro.medium.com/fit/c/200/133/1*tAXQcg0_ZG0jTnrSe5aLrA.jpeg',
		_id: 'blog2',
	},
	{
		title: 'To Become Happier, Ask Yourself These Two Questions Every Night',
		subtitle: 'The one-minute exercise can make a profound difference',
		url: '/to-become-happier-ask-yourself-these-two-questions-every-night',
		picture:
			'https://miro.medium.com/fit/c/200/133/1*tAXQcg0_ZG0jTnrSe5aLrA.jpeg',
		_id: 'blog3',
	},
];

const index = () => {
	return (
		<MainLayout>
			<Hero
				href='/'
				title='My Overly Simple Rules for a Good Life'
				subtitle='9 rules to live by so you outperform in life.'
				url='/my-overly-simple-rules-for-a-good-life'
				picture='https://miro.medium.com/max/1000/1*mO-z0rKGLE-cJOGcxRbtGw.jpeg'
			/>
			<BlogFeed withAside withBookmarks blogItems={blogItems} />
			<Newsletter />
		</MainLayout>
	);
};

export default index;
