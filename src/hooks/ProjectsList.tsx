import React, { useEffect, useState } from 'react'
import { projectsApi } from '../services/apiService'
import ProjectCard from './ProjectCard'

interface Project {
	id: number
	name: string
	description: string
	deadline: string
	experience: string
}
interface ProjectsListProps {
	onEdit: (projectId: number) => void
}
const ProjectsList: React.FC<ProjectsListProps> = ({ onEdit }) => {
	const [projects, setProjects] = useState<Project[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [currentDate] = useState(new Date())
	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const data = await projectsApi.getProjects()
				setProjects(data)
			} catch (err) {
				setError('Failed to fetch projects')
			} finally {
				setLoading(false)
			}
		}

		fetchProjects()
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>{error}</div>
	const activeProjects = projects.filter(project => new Date(project.deadline) >= currentDate)
	const overdueProjects = projects.filter(project => new Date(project.deadline) < currentDate)

	return (
		<div>
			<h2 className='text-lg font-bold mb-4'>Active Projects</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
				{activeProjects.map(project => (
					<div
						key={project.id}
						className='bg-white p-4 cursor-pointer rounded-xl '
						onClick={() => onEdit(project.id)}
					>
						<ProjectCard
							key={project.id}
							project={project}
						/>
					</div>
				))}
			</div>

			<h2 className='text-lg font-bold mb-4'>Overdue Projects</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{overdueProjects.map(project => (
					<div
						key={project.id}
						className='bg-white  p-4 cursor-pointer  rounded-xl '
						onClick={() => onEdit(project.id)}
					>
						<ProjectCard
							key={project.id}
							project={project}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProjectsList
