import { MessageSquare, BellRing } from 'lucide-react'
const Header: React.FC = () => (
	<header className='  p-4 h-20 flex justify-between mx-10 items-center'>
		<h1 className='text-xl font-bold'>Trood Community</h1>
		<div className='flex gap-3'>
			<MessageSquare />
			<BellRing />
			<div className='bg-slate-700 rounded-full w-7'></div>
			<h3 className='text-sm'>Alex Smith</h3>
		</div>
	</header>
)

export default Header
