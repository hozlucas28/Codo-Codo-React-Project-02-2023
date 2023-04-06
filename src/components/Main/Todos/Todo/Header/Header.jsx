import { container } from './Header.module.css'

const Header = ({ todoAttrs, todoKey, toDoLists, setToDoLists }) => {
	const handleChange = ({ target }) => {
		toDoLists[todoKey].title = target.value
		setToDoLists(toDoLists)
	}

	return (
		<label>
			<input
				className={container}
				type="text"
				value={todoAttrs.title}
				onChange={handleChange}
			/>
		</label>
	)
}
export default Header
