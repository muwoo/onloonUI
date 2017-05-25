/**
 * @author monkeywang
 * Date: 17/5/18
 */
import LxButton from './src/button'

LxButton.install = function(Vue) {
  Vue.component(LxButton.name, LxButton)
}

export default LxButton
