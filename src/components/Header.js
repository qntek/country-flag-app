import moonIcon from '../svg/moon.svg';
import moonIconLight from '../svg/moonLight.svg';
import ContextHook from '../hooks/ContextHook';

function Header() {
	const { isDarkMode, setDarkMode } = ContextHook();

	const onThemeChange = () => {
		localStorage.setItem('theme', !isDarkMode);
		setDarkMode(!isDarkMode);
	}
	return (
		<header className='text-base md:text-xl lg:text-2xl py-6'>
			<div className='xl:container mx-5 xl:mx-auto xl:px-12 flex flex-row justify-between'>
				<div>
					<h1 className='font-extrabold'>Where in the word?</h1>
				</div>
				<div
					onClick={onThemeChange}
					className='flex flex-row align-middle cursor-pointer'>
					<img src={isDarkMode ? moonIconLight : moonIcon} alt='' />
					<p className='font-semibold pl-2'>Dark Mode</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
