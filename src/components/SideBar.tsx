import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar: React.FC = () => (
	<aside className='w-64 p-4 flex flex-col justify-between bg-gray-100 h-full'>
		<ul className='space-y-4'>
			<li>
				<NavLink
					to='/'
					className={({ isActive }) =>
						`block p-2 rounded-xl ${isActive ? 'bg-gray-300 font-bold' : 'hover:bg-gray-300'}`
					}
				>
					Main page
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/projects'
					className={({ isActive }) =>
						`block p-2 rounded-xl ${isActive ? 'bg-gray-300 font-bold' : 'hover:bg-gray-300'}`
					}
				>
					Projects
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/vacancies'
					className={({ isActive }) =>
						`block p-2 rounded-xl ${isActive ? 'bg-gray-300 font-bold' : 'hover:bg-gray-300'}`
					}
				>
					Vacancies
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/people'
					className={({ isActive }) =>
						`block p-2 rounded-xl ${isActive ? 'bg-gray-300 font-bold' : 'hover:bg-gray-300'}`
					}
				>
					People
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/tests'
					className={({ isActive }) =>
						`block p-2 rounded-xl ${isActive ? 'bg-gray-300 font-bold' : 'hover:bg-gray-300'}`
					}
				>
					Tests
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/settings'
					className={({ isActive }) =>
						`block p-2 rounded-xl ${isActive ? 'bg-gray-300 font-bold' : 'hover:bg-gray-300'}`
					}
				>
					Settings
				</NavLink>
			</li>
		</ul>
		<button className='text-gray-400 py-2 px-4 hover:text-black'>Log out</button>
	</aside>
)

export default SideBar
