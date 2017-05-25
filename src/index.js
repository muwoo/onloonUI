/**
 * @author monkeywang
 * Date: 17/5/18
 */
import Button from '../packages/button/index.js'
import Editor from '../packages/editor/index.js'
const install = function(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Editor.name, Editor);
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  Button,
  Editor
}
