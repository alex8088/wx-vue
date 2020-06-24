import Form from './src/form'
import FormHeader from './src/form-header'
import FormBody from './src/form-body'
import FormGroup from './src/form-group'
import FormCell from './src/form-cell'
import FormAction from './src/form-action'
import FormTips from './src/form-tips'
import FormFooter from './src/form-footer'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
  Vue.component(FormHeader.name, FormHeader)
  Vue.component(FormBody.name, FormBody)
  Vue.component(FormGroup.name, FormGroup)
  Vue.component(FormCell.name, FormCell)
  Vue.component(FormAction.name, FormAction)
  Vue.component(FormTips.name, FormTips)
  Vue.component(FormFooter.name, FormFooter)
}

export {
  Form,
  FormHeader,
  FormBody,
  FormGroup,
  FormCell,
  FormAction,
  FormTips,
  FormFooter
}

export default Form