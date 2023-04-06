import { container } from './Checkboxs.module.css'

import Checkbox from './Checkbox.jsx'

const Checkboxs = ({ todoAttrs, ...props }) => {
	return (
		<fieldset className={container}>
			{todoAttrs.checkboxs.map((c) => (
				<Checkbox
					key={c.id}
					checkboxId={c.id}
					checked={c.completed}
					{...props}
				>
					{c.text}
				</Checkbox>
			))}
		</fieldset>
	)
}

export default Checkboxs
