import { TEXTS } from '../../constants/TEXTS.js'

import { container } from './Header.module.css'

const Header = () => {
	return (
		<header className={container}>
			<h1>{TEXTS.header.title}</h1>
		</header>
	)
}

export default Header
