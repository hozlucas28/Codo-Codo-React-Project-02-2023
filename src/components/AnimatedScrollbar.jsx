import { useEffect, useRef } from 'react'

import { container } from './AnimatedScrollbar.module.css'

const AnimatedScrollbar = () => {
	const componentRef = useRef()

	useEffect(() => {
		const component = componentRef.current
		const setWidthOfScrollbar = () => {
			const scrollTop = document.documentElement.scrollTop
			const scrollHeight = document.documentElement.scrollHeight
			component.style.width = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`
		}

		document.addEventListener('scroll', setWidthOfScrollbar)

		return () => {
			document.removeEventListener('scroll', setWidthOfScrollbar)
		}
	}, [])

	return (
		<div
			ref={componentRef}
			className={container}
		></div>
	)
}

export default AnimatedScrollbar
