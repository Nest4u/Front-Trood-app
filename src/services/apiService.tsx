import axios from 'axios'

const API_URL = import.meta.env.MODE === 'development' ? '/api' : import.meta.env.VITE_API_URL

export const api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

export const projectsApi = {
	getProjects: async () => {
		const response = await api.get('/projects?populate=*')
		return response.data
	},
	createProject: async (project: { name: string; description: string; deadline: string }) => {
		const response = await api.post('/projects', project)
		return response.data
	},
	getProjectById: async (id: number) => {
		const response = await api.get(`/projects/${id}`)
		return response.data
	},
	updateProject: async (
		id: number,
		project: { name: string; description: string; deadline: string }
	) => {
		const response = await api.put(`/projects/${id}`, project)
		return response.data
	},
	deleteProject: async (id: number) => {
		await api.delete(`/projects/${id}`)
	}
}
