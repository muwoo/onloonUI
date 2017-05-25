<template>
  <div>
    <p v-highlight>
      <pre>
        <code :class="code" style="background: #f9fafc;">
          <p v-for="context in contexts">{{context}}</p>
        </code>
      </pre>
    </p>
  </div>
</template>

<script>

  export default{
    props: {
      contexts: Array,
      code: String
    }
  }
</script>
