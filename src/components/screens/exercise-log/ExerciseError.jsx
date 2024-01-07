import Alert from '../../ui/alert/Alert'

const ExerciseError = ({ error }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{error && <Alert type='error' text={error} />}
		</div>
	)
}

export default ExerciseError
