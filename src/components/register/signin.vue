<template>
  <v-container field>
    <v-row class="">
      <v-card class="d-flex flex-column mx-auto pa-5">
        <span v-if="e">{{ e }}</span>
        <span v-if="jwt">{{ jwt }}</span>
        <v-card color="purple">
          {{ coo }}
        </v-card>
        <v-form @submit="signin()">
          <v-col>
            <v-text-field
              v-model="username"
              :rules="Rules"
              label="username"
              append-icon="mdi-face"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              :rules="Rules"
              hide-details="auto"
              append-icon="mdi-lock"
              required
            >
            </v-text-field>
          </v-col>
          <v-card-actions dir="rtl">
            <v-btn type="submit" block>Submit</v-btn>
          </v-card-actions>
        </v-form>
        <v-divider></v-divider>
        <p class="mx-auto text-h6">OR</p>
        <v-btn :href="this.$urllog" color="red"
          ><v-icon>mdi-google</v-icon>oogle Login
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$cookies.remove("jwt");
  },
  methods: {
    signin: function () {
      this.$axios({
        method: "post",
        url: this.$urlroot + `/auth/local`,
        data: {
          identifier: this.username,
          password: this.password,
        },
      })
        .then((r) => {
          let x = r.data.jwt;
          this.$cookies.set("jwt", x);
          this.jwt = x;
        })

        .catch((e) => (this.e = e));
    },
  },
  computed: {
    coo() {
      return this.$cookies.get("jwt");
    },
  },
  data() {
    return {
      e: null,
      jwt: null,
      valid: false,

      username: "",
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+./.test(v) || "E-mail must be valid",
      ],
      Rules: [
        (v) => !!v || "Password is required",
        (value) =>
          (value && value.length >= 3) ||
          "Password must be at least 6 characters",
      ],
    };
  },
};
</script>

<style></style>
