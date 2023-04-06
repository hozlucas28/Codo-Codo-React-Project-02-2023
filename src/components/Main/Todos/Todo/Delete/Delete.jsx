import { TrashIcon } from '@heroicons/react/24/solid'

import { TEXTS } from '../../../../../constants/TEXTS.js'

import { container } from './Delete.module.css'

const Delete = ({ todoKey, toDoLists, setToDoLists }) => {
	const handleClick = () => {
		delete toDoLists[todoKey]
		setToDoLists(toDoLists)
	}

	return (
		<button
			className={`bg-red-600/75 group-hover/todo:opacity-75 ${container}`}
			type="button"
			name={TEXTS.main.toDoList.deleteBtn.altText}
			onClick={handleClick}
		>
			<TrashIcon />
		</button>
	)
}

export default Delete
