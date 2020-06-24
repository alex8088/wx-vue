const noop = function () {}

const getStyle = (el, styleProp) => {
  var value, defaultView = (el.ownerDocument || document).defaultView
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase()
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp)
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/-(\w)/g, (str, letter) => {
      return letter.toUpperCase()
    })
    value = el.currentStyle[styleProp]
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return ((value) => {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + 'px'
        el.style.left = oldLeft
        el.runtimeStyle.left = oldRsLeft
        return value;
      })(value)
    }
    return value
  }
}

export default {
  noop,
  getStyle
}