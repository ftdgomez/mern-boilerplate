import Head from 'next/head';
import { MainLayout } from '../layout/MainLayout.jsx';

export default function Home() {
	return (
		<MainLayout>
			<p>hello this is the body</p>
		</MainLayout>
	);
}
