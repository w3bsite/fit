<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="!miniVariant"
      :clipped="clipped"
      fixed
      bottom
      app
    >
      <v-list nav>
        <v-switch
          v-model="$vuetify.theme.dark"
          hint="Don't Touch!"
          inset
          persistent-hint
        ></v-switch>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "left" : "right"}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <slot> </slot>

    <v-footer absolute app>
      <span v-focus>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Fit Games",
      items: [
        {
          icon: "mdi-home",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-web",
          title: "Learn Web",
          to: "/Web"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Game news",
          to: "/news"
        },

        {
          icon: "mdi-apps",
          title: "Articles",
          to: "/Articles"
        },
        {
          icon: "mdi-gamepad-variant",
          title: "Games",
          to: "/Games"
        },
        {
          icon: "mdi-test-tube",
          title: "Test",
          to: "/Test"
        }
      ]
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  },
  computed: {
    mini() {
      if (this.$vuetify.breakpoint.mobile) {
        return true;
      } else {
        return false;
      }
    }
  },
  // watch: {
  //   mini() {
  //     this.mini == true ? this.miniVariant == true : "";
  //   }
  // },
  mounted() {
    if (this.$vuetify.breakpoint.mobile == true) {
      this.drawer = false;
      this.miniVariant = true;
    } else {
      this.drawer = true;
      this.miniVariant = false;
    }
  }
};
</script>
