import { TEXTS } from '../../constants/TEXTS.js'
import { LINKS } from '../../constants/LINKS.js'

import { container } from './Footer.module.css'

import Anchor from './Anchor.jsx'

const Footer = () => {
	return (
		<footer className={container}>
			<p>{TEXTS.footer.copyright}</p>
			<Anchor
				href={LINKS.repository}
				target="_blank"
			>
				{TEXTS.footer.sourceCode}
			</Anchor>
		</footer>
	)
}

export default Footer
