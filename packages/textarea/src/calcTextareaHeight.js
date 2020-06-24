/**
 * form element ui
 */
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
]

const calculateNodeStyling = (targetElement) => {
  const style = window.getComputedStyle(targetElement)

  const boxSizing = style.getPropertyValue('box-sizing')

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  )

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  )

  const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';')

  return { contextStyle, paddingSize, borderSize, boxSizing }
}

let hiddenTextarea
const calcTextareaHeight = (targetElement, rows) => {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea')
    document.body.appendChild(hiddenTextarea)
  }

  let { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement)

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''

  let height = hiddenTextarea.scrollHeight

  if (boxSizing === 'border-box') {
    height = height + borderSize
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize
  }

  hiddenTextarea.value = ''
  let rowHeight = hiddenTextarea.scrollHeight - paddingSize

  if (rows !== null) {
    let minHeight = rowHeight * rows
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize
    }
    height = Math.max(minHeight, height)
  }

  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea)
  hiddenTextarea = null
  return height
}

export default calcTextareaHeight