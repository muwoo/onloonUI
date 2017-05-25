<template>
  <div class="multiEditor">
    <textarea ref="editor" v-model="content" :placeholder="placeholder" autofocus @click="removetext"></textarea>
  </div>
</template>
<script>
  import Simditor from 'simditor'
  import '../../../node_modules/monkeywang-simditor/styles/simditor.css'
  export default{
    name: 'LxEditor',
    data () {
      return {
        content: '',
        timer: null,
        id: 1,
        editor: ''
      }
    },
    props: {
      defaultContent: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      }
    },
    mounted () {
      // 初始化富文本编辑器
      this.editor = new Simditor({
        textarea: this.$refs.editor,
        upload: {
          url: `${process.env.DOMAIN}/bshop/config/pic/upload`,
          // params: {filename: 123},
          fileKey: 'picture',
          connectionCount: 3
        },
        success: function (res) {
          console.log(res)
        }
      })
      this.editor.setValue(this.defaultContent)
      this.editor.on('valuechanged', (e, src) => {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.$emit('getValue', this.editor.getValue())
        }, 500)
      })
    },
    watch: {
      defaultContent () {
        this.editor.setValue(this.defaultContent)
      }
    },
    methods: {
      removetext () {
        this.editor.setValue(this.defaultContent)
      }
    }
  }
</script>
