<template>
  <button :disabled="disabled" class="lx-button"
    :class="[
      type ? 'lx-button-' + type : '',
      size ? 'lx-button-' + size : '',
      {
        'is-disabled': disabled
      }
    ]"
  >
      <slot></slot>
  </button>
</template>
<script>
  /**
   * button
   */
  export default {
    name: 'LxButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
