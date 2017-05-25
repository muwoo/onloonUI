/**
 * @author monkeywang
 * Date: 17/5/25
 */
import Editor from './src/editor.vue'

Editor.install = function(Vue) {
  Vue.component(Editor.name, Editor)
}

export default Editor
