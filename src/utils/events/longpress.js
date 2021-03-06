let timeOutEvent = null
const LongpressEvent = CustomEvent || Event

const onTouchStartOrMouseDown = (event) => {
	timeOutEvent = setTimeout(function () {
		timeOutEvent = null
		event.target.dispatchEvent(new LongpressEvent('longpress', { view: window, bubbles: true, cancelable: true }))
		// longpress触发拦截click事件
		const onClick = (event) => {
			event.stopPropagation()
			document.removeEventListener('click', onClick, { capture: true })
		}
		document.addEventListener('click', onClick, { capture: true })
	}, 400)
}
document.addEventListener('touchstart', onTouchStartOrMouseDown)
document.addEventListener('mousedown', onTouchStartOrMouseDown)

const onTouchMoveOrMouseMove = (event) => {
	clearTimeout(timeOutEvent)
	timeOutEvent = null
}
document.addEventListener('touchmove', onTouchMoveOrMouseMove)
document.addEventListener('mousemove', onTouchMoveOrMouseMove)

const onTouchEndOrMouseUp = (event) => {
	clearTimeout(timeOutEvent)
	timeOutEvent = null
}
document.addEventListener('touchend', onTouchEndOrMouseUp)
document.addEventListener('mouseup', onTouchEndOrMouseUp)