<template>
  <span class="lx-show-more">
    <span v-html="filterStr"></span>
    <a
      class="lx-show-more-link"
      @click="showMore($event)"
      v-if="isShowMore">
      {{text}}
    </a>
  </span>
</template>
<script>
  export default{
    name: 'LxShowMore',

    data () {
      return {
        isFilter: true,
        isShowMore: false,
        text: ''
      }
    },
    props: {
      moreText: {
        type: String,
        default: '展开'
      },
      overText: {
        type: String,
        default: '收起'
      },
      allowFold: {
        type: Boolean,
        default: true
      },
      isFilterHref: {
        type: Boolean,
        default: true
      },
      showMoreText: [String, Number],
      length: Number
    },
    mounted () {
      this.text = this.moreText
    },
    methods: {
      filterHref (returnText) {
        let strRegex = '((https|http)://)[A-Za-z0-9.-_]+\\.[A-Za-z0-9-_%&?/.=]+'
        let regex = new RegExp(strRegex, 'gi')
        return this.replaceReg(regex, returnText)
      },
      replaceReg (reg, str) {
        return str.replace(reg, function (m) {
          return `<a class="lx-show-more-href" href="${m}" target="_blank">${m}</a>`
        })
      },
      showMore (event) {
        event.stopPropagation()
        this.$emit('changeText')
        if (this.text === this.moreText) {
          this.isFilter = false
          this.text = this.allowFold ? this.overText : ''
        } else {
          this.isFilter = true
          this.text = this.moreText
        }
      }
    },
    computed: {
      filterStr () {
        let returnText = ''
        if (this.showMoreText === null) {
          return ''
        } else{
          returnText = this.isFilterHref ? this.filterHref(this.showMoreText) : this.showMoreText
        }
        if (this.showMoreText.length > this.length && this.isFilter) {
          this.isShowMore = true
          return returnText.substring(0, this.length) + '...'
        } else {
          return returnText
        }
      }
    }
  }
</script>
