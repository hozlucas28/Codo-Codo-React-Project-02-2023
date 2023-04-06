import { useEffect, useState } from 'react'

import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import AnimatedScrollbar from './components/AnimatedScrollbar.jsx'

import { TO_DO_LISTS } from './constants/TO_DO_LISTS.js'

import { getLocalStorage } from './utils/getLocalStorage.js'
import { setLocalStorage } from './utils/setLocalStorage.js'

function App() {
	const localToDoLists = getLocalStorage('To_Do_Lists') ?? TO_DO_LISTS
	const [toDoLists, setToDoLists] = useState(localToDoLists)
	console.log(toDoLists)

	const toDoListsEntries = Object.entries(toDoLists)
	const thereAreToDoLists = toDoListsEntries.length > 0

	useEffect(() => {
		setLocalStorage({ key: 'To_Do_Lists', value: { ...toDoLists } })
	}, [toDoLists])

	return (
		<>
			<Header />
			<Main
				toDoLists={{ ...toDoLists }}
				setToDoLists={setToDoLists}
				toDoListsEntries={toDoListsEntries}
				thereAreToDoLists={thereAreToDoLists}
			/>
			<Footer />
			{thereAreToDoLists ? <AnimatedScrollbar /> : null}
		</>
	)
}

export default App
