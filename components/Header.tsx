function Header() {
	return (
		<div className='z-50 fixed h-12 py-2 top-0 w-full px-4'>
			<div className=' flex justify-between max-w-[100rem] mx-auto items-center'>
				{/* logo */}
				<div className='h-8 w-20 rounded-lg bg-primary animate-pulse'></div>
				{/* mobile menu */}
				<div className='sm:hidden flex-center gap-4'>
					<div className='rounded-full bg-cyan-400 animate-pulse h-6 w-16'></div>
					<div className='bg-gray-300 rounded-xl size-10'></div>
				</div>
				{/* desktop menu */}
				<nav className='flex gap-4 max-sm:hidden'>
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
