export function setLocalStorage({ key, value }) {
	window.localStorage.setItem(key, JSON.stringify(value))
}
