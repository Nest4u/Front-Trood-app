import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
	{ path: '/', label: 'Main page' },
	{ path: '/projects', label: 'Projects' },
	{ path: '/vacancies', label: 'Vacancies' },
	{ path: '/people', label: 'People' },
	{ path: '/tests', label: 'Tests' },
	{ path: '/settings', label: 'Settings' }
]

const SideBar: React.FC = () => (
	<aside className='w-64 p-4 flex flex-col justify-between h-full'>
		<ul className='space-y-4'>
			{navItems.map(({ path, label }) => (
				<li key={path}>
					<NavLink
						to={path}
						className={({ isActive }) =>
							`block p-2 rounded-xl ${isActive ? 'bg-gray-300 font-bold' : 'hover:bg-gray-300'}`
						}
					>
						{label}
					</NavLink>
				</li>
			))}
		</ul>
		<button className='text-gray-400 py-2 px-4 hover:text-black'>Log out</button>
	</aside>
)

export default SideBar
