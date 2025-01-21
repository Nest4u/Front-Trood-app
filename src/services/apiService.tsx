import axios from 'axios'

// const API_URL = 'http://localhost:8080';

export const api = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json'
	}
})

export const projectsApi = {
	getProjects: async () => {
		try {
			const response = await api.get('/projects?populate=*')

			return response.data
		} catch (error) {
			console.error('Error fetching projects:', error)
			throw error
		}
	},
	createProject: async (project: { name: string; description: string; deadline: string }) => {
		try {
			const response = await api.post('/projects', project)
			return response.data
		} catch (error) {
			console.error('Error creating project:', error)
			throw error
		}
	},
	getProjectById: async (id: number) => {
		const response = await api.get(`/projects/${id}`)
		return response.data
	},
	updateProject: async (
		id: number,
		project: { name: string; description: string; deadline: string }
	) => {
		try {
			const response = await api.put(`/projects/${id}`, project)
			return response.data
		} catch (error) {
			console.error('Error updating project:', error)
			throw error
		}
	},
	deleteProject: async (id: number) => {
		try {
			await api.delete(`/projects/${id}`)
		} catch (error) {
			console.error('Error deleting project:', error)
			throw error
		}
	}
}
