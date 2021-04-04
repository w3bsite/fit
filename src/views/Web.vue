<template>
  <div>
    <h2>{{ title }}</h2>
    <signup></signup>
  </div>
</template>
<script>
import signup from "../components/register/signup.vue";
export default {
  components: { signup },
  name: "key",
  data() {
    return {
      title: this.$route.path,
    };
  },
};
</script>
