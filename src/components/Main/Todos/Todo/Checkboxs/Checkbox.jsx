import { MinusIcon } from '@heroicons/react/24/solid'

import { container, input, text, deleteBtn } from './Checkbox.module.css'
import { TEXTS } from '../../../../../constants/TEXTS.js'

const Checkbox = ({ children, checkboxId, checked, todoKey, toDoLists, setToDoLists }) => {
	const handleClick = () => {
		const checkboxsArray = Object.values(toDoLists[todoKey].checkboxs)
		const updatedCheckboxs = checkboxsArray.filter((c) => c.id !== checkboxId)
		const updatedTodo = { ...toDoLists[todoKey], checkboxs: updatedCheckboxs }

		toDoLists[todoKey] = updatedTodo
		setToDoLists(toDoLists)
	}

	return (
		<label className={`group/checkbox ${container}`}>
			<input
				className={`peer ${input}`}
				type="checkbox"
				defaultChecked={checked}
			/>
			<p className={`peer-checked:line-through peer-checked:opacity-10 ${text}`}>{children}</p>
			<button
				className={`bg-red-600/75 group-hover/checkbox:opacity-100 ${deleteBtn}`}
				type="button"
				name={TEXTS.main.toDoList.deleteCheckbox}
				onClick={handleClick}
			>
				<MinusIcon />
			</button>
		</label>
	)
}

export default Checkbox
