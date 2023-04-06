import { container } from './Todo.module.css'

import Delete from './Delete/Delete.jsx'
import Header from './Header/Header.jsx'
import Checkboxs from './Checkboxs/Checkboxs.jsx'
import AddCheckbox from './AddCheckbox/AddCheckbox.jsx'

const Todo = ({ ...props }) => {
	return (
		<form className={`group/todo ${container}`}>
			<Delete {...props} />
			<Header {...props} />
			<Checkboxs {...props} />
			<AddCheckbox {...props} />
		</form>
	)
}

export default Todo
