<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>
<script>
export default {
  name: this.$route.path
};
</script>
