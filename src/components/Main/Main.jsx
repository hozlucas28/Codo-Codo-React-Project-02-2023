import { container } from './Main.module.css'

import Todos from './Todos/Todos.jsx'
import AddTodo from './AddTodo/AddTodo.jsx'
import DeleteTodos from './DeleteTodos/DeleteTodos.jsx'

const Main = ({ toDoLists, toDoListsEntries, thereAreToDoLists, ...props }) => {
	const lastTodoKey = thereAreToDoLists ? parseInt([...toDoListsEntries].pop()[0]) : 0

	return (
		<main className={container}>
			{thereAreToDoLists ? (
				<Todos
					toDoLists={toDoLists}
					toDoListsEntries={toDoListsEntries}
					{...props}
				/>
			) : null}
			<AddTodo
				toDoLists={toDoLists}
				lastTodoKey={lastTodoKey}
				{...props}
			/>
			{thereAreToDoLists ? <DeleteTodos {...props} /> : null}
		</main>
	)
}

export default Main
