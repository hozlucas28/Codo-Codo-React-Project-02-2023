import { container } from './Todos.module.css'

import Todo from './Todo/Todo.jsx'

const Todos = ({ toDoListsEntries, ...props }) => {
	return (
		<div className={container}>
			{toDoListsEntries.map(([key, attrs]) => (
				<Todo
					key={key}
					todoKey={key}
					todoAttrs={attrs}
					{...props}
				/>
			))}
		</div>
	)
}

export default Todos
