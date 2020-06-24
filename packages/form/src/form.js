import $ from '../../core/util'

export default {
  name: "WxForm",
  provide() {
    return {
      form: this
    }
  },
  props: {
    disabled: Boolean
  },
  methods: {
    _findCellParent($el) {
      if (!$el || !$el.classList) return null
      if ($el.classList.contains('weui-cell')) return $el
      return this._findCellParent($el.parentNode)
    },
    _validate($el, $form) {
      const input = $el, val = $el.value

      if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
        let reg = input.getAttribute('pattern') || ''

        if (input.type == 'radio') {
          const radioInputs = $form.querySelectorAll('input[type="radio"][name="' + input.name + '"]')
          for (let i = 0, len = radioInputs.length; i < len; ++i) {
            if (radioInputs[i].checked) return null
          }
          return 'empty'
        } else if (input.type == 'checkbox') {
          if (reg) {
            const checkboxInputs = $form.querySelectorAll('input[type="checkbox"][name="' + input.name + '"]')
            const regs = reg.replace(/[{\s}]/g, '').split(',')
            let count = 0

            if (regs.length != 2) {
              throw input.outerHTML + ' regexp is wrong.'
            }

            checkboxInputs.forEach((checkboxInput) => {
              if (checkboxInput.checked)
                ++count
            })

            if (regs[1] === '') { // {0,}
              if (count >= parseInt(regs[0])) {
                return null
              } else {
                return count == 0 ? 'empty' : 'notMatch'
              }
            } else { // {0,2}
              if (parseInt(regs[0]) <= count && count <= parseInt(regs[1])) {
                return null
              } else {
                return count == 0 ? 'empty' : 'notMatch'
              }
            }
          } else {
            return input.checked ? null : 'empty'
          }
        } else if (reg) {
          return new RegExp(reg).test(val) ? null : !val.length ? input.getAttribute('required') === null ? null : 'empty' : 'notMatch'
        } else if (!val.length) {
          return 'empty'
        } else {
          return null
        }
      } else if (val.length) {
        return null
      }

      return 'empty'
    },
    validate(callback = $.noop) {
      const $form = this.$el
      const $checkEls = $form.querySelectorAll('[required],[pattern]')
      if (typeof callback !== 'function') callback = $.noop
      for (let i = 0, len = $checkEls.length; i < len; ++i) {
        const $el = $checkEls[i]
        const errorMsg = this._validate($el, $form)
        if (errorMsg) {
          const errorTip = $el.getAttribute(`${errorMsg}Tips`) // empty
            || $el.getAttribute('tips')
            || $el.getAttribute('placeholder')
            || `${errorMsg === 'empty' ? '必填项不允许为空' : '校验错误'}`
          if (!callback(errorTip) && $el.type !== 'checkbox' && $el.type !== 'radio') {
            const cellParent = this._findCellParent($el)
            if (cellParent) cellParent.classList.add('weui-cell_warn')
          }
          return
        }
      }
      callback(null)
    }
  },
  render(h) {
    return h('div', { class: ['weui-form'] }, this.$slots.default)
  }
}