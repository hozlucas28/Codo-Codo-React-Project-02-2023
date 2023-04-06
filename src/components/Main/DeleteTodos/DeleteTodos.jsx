import { TEXTS } from '../../../constants/TEXTS.js'

import { container } from './DeleteTodos.module.css'

const DeleteTodos = ({ setToDoLists }) => {
	const handleClick = () => {
		setToDoLists({})
	}

	return (
		<button
			className={`bg-red-600 ${container}`}
			type="button"
			name={TEXTS.main.deleteToDoListsBtn.altText}
			onClick={handleClick}
		>
			{TEXTS.main.deleteToDoListsBtn.text}
		</button>
	)
}

export default DeleteTodos
