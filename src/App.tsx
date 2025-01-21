import ProjectsPage from './pages/ProjectPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<ProjectsPage />}
				/>
				<Route
					path='/projects'
					element={<ProjectsPage />}
				/>
				<Route
					path='/vacancies'
					element={<ProjectsPage />}
				/>
				<Route
					path='/people'
					element={<ProjectsPage />}
				/>
				<Route
					path='/tests'
					element={<ProjectsPage />}
				/>
				<Route
					path='/settings'
					element={<ProjectsPage />}
				/>
			</Routes>
		</Router>
	)
}

export default App
