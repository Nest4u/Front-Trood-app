import React from 'react'
import { projectsApi } from '../../services/apiService'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
interface ProjectFormProps {
	onClose: () => void
	onUpdate: () => void
}

const CreateProjectForm: React.FC<ProjectFormProps> = ({ onClose, onUpdate }) => {
	const handleCreateProject = async (values: any) => {
		try {
			const createdProject = await projectsApi.createProject(values)

			const storedProjects = localStorage.getItem('projects')
			const projects = storedProjects ? JSON.parse(storedProjects) : []

			const updatedProjects = [...projects, createdProject]
			localStorage.setItem('projects', JSON.stringify(updatedProjects))

			console.log('Updated projects:', updatedProjects)
			alert('Project created successfully')

			onUpdate()
			onClose()
		} catch (error) {
			alert('Failed to create project')
		}
	}

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		field: Yup.string().required('Field is required'),
		experience: Yup.string().required('Experience is required'),
		deadline: Yup.date().required('Deadline is required'),

		description: Yup.string()
			.required('Description is required')
			.max(500, 'Description must be 500 characters or less')
	})

	return (
		<div className='bg-white shadow rounded p-6'>
			<h2 className='text-lg font-bold mb-4'>Creating Project</h2>
			<Formik
				initialValues={{
					name: '',
					field: '',
					experience: '',
					deadline: '',
					description: ''
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(true)
					handleCreateProject(values).finally(() => {
						setSubmitting(false)
						resetForm()
					})
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className='grid grid-cols-2 gap-4 mb-4'>
							<div>
								<Field
									name='name'
									type='text'
									placeholder='Name'
									className='border p-2 rounded w-full'
								/>
								<ErrorMessage
									name='name'
									component='div'
									className='text-red-500 text-sm'
								/>
							</div>

							<div>
								<Field
									as='select'
									name='field'
									className='border p-2 rounded w-full'
								>
									<option value=''>Select Field</option>
									<option value='Design'>Design</option>
									<option value='Development'>Development</option>
									<option value='Marketing'>Marketing</option>
								</Field>
								<ErrorMessage
									name='field'
									component='div'
									className='text-red-500 text-sm'
								/>
							</div>

							<div>
								<Field
									name='experience'
									type='text'
									placeholder='Experience'
									className='border p-2 rounded w-full'
								/>
								<ErrorMessage
									name='experience'
									component='div'
									className='text-red-500 text-sm'
								/>
							</div>

							<div>
								<Field
									name='deadline'
									type='date'
									className='border p-2 rounded w-full'
								/>
								<ErrorMessage
									name='deadline'
									component='div'
									className='text-red-500 text-sm'
								/>
							</div>
						</div>

						<div>
							<Field
								as='textarea'
								name='description'
								placeholder='Description'
								className='border p-2 rounded w-full mb-4'
								rows={4}
							/>
							<ErrorMessage
								name='description'
								component='div'
								className='text-red-500 text-sm'
							/>
						</div>

						<div className='flex justify-between'>
							<button
								type='submit'
								disabled={isSubmitting}
								className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400'
							>
								{isSubmitting ? 'Submitting...' : 'Create Project'}
							</button>
							<button
								type='button'
								onClick={onClose}
								className='bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400'
							>
								Cancel
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default CreateProjectForm
