<template>
  <div>
    <v-card>
      <h3>redirect</h3>
      <v-btn @click="token">token</v-btn>
      <v-card>{{ jwt }}</v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "redirect",
  data() {
    return { jwt: "", username: "", email: "" };
  },
  mounted() {
    setTimeout(() => this.token(), 0.5);
    setTimeout(() => this.$router.push({ name: "Home" }), 5000);
  },
  methods: {
    token: function() {
      this.$axios
        .get(
          `${this.$urlroot}/auth/google/callback?access_token=${this.$route.query.access_token}`
        )
        .then(res => {
          if (res.status == 200) {
            this.resp = res.data;
            this.jwt = this.resp.jwt;
            this.username = this.resp.user.username;
            this.email = this.resp.user.email;
            this.$cookies.set("jwt", this.jwt);
          }
        })
        .then();
    }
  }
};
</script>

<style></style>
