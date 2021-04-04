<template>
  <v-app>
    <AppBar :class="theme">
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          {{ title }}
          <keep-alive include="">
            <router-view @tl="title = 'yyyy'"></router-view>
          </keep-alive>
        </v-container>
      </v-main>
    </AppBar>
  </v-app>
</template>

<script>
import AppBar from "@/components/Globals/AppBar.vue";
export default {
  name: "App",

  components: { AppBar },

  data: () => ({
    title: "hi",
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? " " : "grey lighten-2";
    },
  },
};
</script>
