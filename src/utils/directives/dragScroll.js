export default {
  mounted(el, binding) {
    const selector = binding.value
    const scrollContainerEl = selector && el.querySelector(selector) || el
    const onMouseDown = (event) => {
      // 按下了command键或者ctrl键 并且按下了鼠标左键(0:左 1:滚轮 2:右键)
      const checkKey = (event.metaKey || event.ctrlKey) && !event.button
      if (!checkKey) { return }

      const { clientX, clientY, pageX, pageY } = event
      const x1 = clientX || pageX
      const y1 = clientY || pageY
      const maxScrollLeft = scrollContainerEl.scrollWidth - scrollContainerEl.clientWidth
      const maxScrollTop = scrollContainerEl.scrollHeight - scrollContainerEl.clientHeight
      const mouseDownScrollLeft = scrollContainerEl.scrollLeft
      const mouseDownScrollTop = scrollContainerEl.scrollTop

      const onMouseMove = (event) => {
        event.preventDefault()
        const { clientX, clientY, pageX, pageY } = event
        const x2 = clientX || pageX
        const y2 = clientY || pageY

        const offsetX = x2 - x1
        const offsetY = y2 - y1
        const calcScrollLeft = mouseDownScrollLeft - offsetX
        const calcScrollTop = mouseDownScrollTop - offsetY

        scrollContainerEl.scrollTo(
          Math.max(0, Math.min(maxScrollLeft, calcScrollLeft)),
          Math.max(0, Math.min(maxScrollTop, calcScrollTop))
        )
      }
      document.addEventListener('mousemove', onMouseMove, { capture: true })
      // 拖拽禁止click
      const onClick = (event) => {
        event.stopPropagation()
        document.removeEventListener('click', onClick, { capture: true })
      }
      document.addEventListener('click', onClick, { capture: true })

      const onMouseUp = (event) => {
        document.removeEventListener('mousemove', onMouseMove, { capture: true })
        document.removeEventListener('mouseup', onMouseUp, { capture: true })
      }
      document.addEventListener('mouseup', onMouseUp, { capture: true })
    }
    scrollContainerEl.addEventListener('mousedown', onMouseDown)
  }
}
