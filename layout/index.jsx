import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
	return (
		<div className="bg-gradient-to-tr from-blue-500 to-pink-500">
			<Header />
			<main className='flex flex-col justify-around items-center pb-10 h-screen'>{children}</main>
			<Footer />
		</div>
	);
}
