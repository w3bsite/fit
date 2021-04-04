<template>
  <div>
    <v-alert
      v-model="alert"
      border="right"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
      class="text-body-1 font-weight-bold mt-6 mb-2"
      style="direction: rtl"
      transition="fade-transition"
    >
      {{ title }} را دوست داشتید؟ بازی های زیر را به شما پیشنهاد میکنیم.
    </v-alert>
    <div class="text-center"></div>
  </div>
</template>

<script>
export default {
  props: { title: { type: String } },
  data() {
    return { alert: true };
  }
};
</script>
