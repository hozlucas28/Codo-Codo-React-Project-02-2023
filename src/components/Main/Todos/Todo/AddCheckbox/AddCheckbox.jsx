import { useState } from 'react'

import { container, label, input, addBtn } from './AddCheckbox.module.css'

import { TEXTS } from '../../../../../constants/TEXTS.js'

import { checkbox } from '../../../../../models/checkbox.js'

const AddCheckbox = ({ todoKey, todoAttrs, toDoLists, setToDoLists }) => {
	const [text, setText] = useState('')

	const handleChange = ({ target }) => {
		setText(target.value)
	}

	const handleClick = () => {
		if (text.trim() === '') return
		const checkboxs = todoAttrs.checkboxs
		const lastCheckboxId = checkboxs.length > 0 ? parseInt(checkboxs[checkboxs.length - 1].id) : 0
		const newCheckbox = new checkbox({ id: lastCheckboxId + 1, text })

		toDoLists[todoKey].checkboxs.push(newCheckbox)
		setToDoLists(toDoLists)
		setText('')
	}

	return (
		<div className={`group-hover/todo:opacity-100 ${container}`}>
			<label className={label}>
				<input
					className={input}
					type="text"
					maxLength="73"
					onChange={handleChange}
					value={text}
					spellCheck
				/>
				<button
					className={`bg-cyan-700 ${addBtn}`}
					type="button"
					name={TEXTS.main.toDoList.addCheckbox.altText}
					onClick={handleClick}
				>
					{TEXTS.main.toDoList.addCheckbox.text}
				</button>
			</label>
		</div>
	)
}

export default AddCheckbox
