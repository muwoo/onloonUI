/**
 * @author monkeywang
 * Date: 17/5/25
 */
import LimitTextArea from './src/limit-textarea.vue'

LimitTextArea.install = function(Vue) {
  Vue.component(LimitTextArea.name, LimitTextArea)
}

export default LimitTextArea
