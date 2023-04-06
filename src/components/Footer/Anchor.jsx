import { anchor } from './Anchor.module.css'

const Anchor = ({ children, ...props }) => {
	return (
		<a
			className={anchor}
			title={children}
			{...props}
		>
			{children}
		</a>
	)
}

export default Anchor
