import React from 'react'
import { MessageSquare, BellRing } from 'lucide-react'
interface Project {
	id: number
	name: string
	description: string
	deadline: string
	experience: string
}

interface ProjectCardProps {
	project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className='bg-white  p-4'>
			<h3 className='text-lg font-bold'>{project.name}</h3>
			<p className='text-sm text-gray-600'>{project.description}</p>
			<p className='text-sm text-gray-500'>Deadline: {project.deadline}</p>
			<p className='text-sm text-gray-500'>Experience: {project.experience}</p>
			<div className='mt-4 flex justify-end space-x-2'>
				<MessageSquare
					size={20}
					strokeWidth={1}
				/>

				<BellRing
					size={20}
					strokeWidth={1}
				/>
			</div>
		</div>
	)
}

export default ProjectCard
