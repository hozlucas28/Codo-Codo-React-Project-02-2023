import { ToDoList } from '../../../models/toDoList.js'
import { TEXTS } from '../../../constants/TEXTS.js'

import { container } from './AddTodo.module.css'

const AddTodo = ({ lastTodoKey, toDoLists, setToDoLists }) => {
	const handleClick = () => {
		const todoKey = lastTodoKey + 1
		const newTodo = new ToDoList({ title: `To-do list ${todoKey}`, checkboxs: [] })

		toDoLists[todoKey] = newTodo
		setToDoLists(toDoLists)
	}

	return (
		<button
			className={`bg-emerald-600 ${container}`}
			type="button"
			name={TEXTS.main.addToDoListBtn.altText}
			onClick={handleClick}
		>
			{TEXTS.main.addToDoListBtn.text}
		</button>
	)
}

export default AddTodo
