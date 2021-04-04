<template>
  <div>
    <v-btn @click="$emit('tl', $event)">hey</v-btn>
    <h2>{{ title }}</h2>
    <Cart></Cart>
  </div>
</template>
<script>
import Cart from "../components/cart.vue";

export default {
  components: { Cart },
  name: "key",
  data() {
    return {
      title: this.$route.path,
    };
  },
};
</script>
