function Header() {
	return (
		<div className='z-50 fixed h-12 py-2 top-0 w-full px-4'>
			<div className=' flex justify-between max-w-[100rem] mx-auto items-center'>
				<div className='h-8 w-20 rounded-full bg-cyan-200 animate-pulse'></div>
				<nav className='flex gap-4'>
					<div className='rounded-full bg-gray-400 animate-pulse h-6 w-16'></div>
					<div className='rounded-full bg-gray-400 animate-pulse h-6 w-16'></div>
					<div className='rounded-full bg-gray-400 animate-pulse h-6 w-16'></div>
					<div className='rounded-full bg-cyan-400 animate-pulse h-6 w-16'></div>
				</nav>
			</div>
		</div>
	);
}
export default Header;
