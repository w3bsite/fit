<template>
  <div class="container">
    <div class="row">
      <v-btn @click="this.ig" class="col-md-12" color="inddigo" dark
        >twitch access token</v-btn
      >
      <v-card> {{ this.er }} <br /> </v-card><br />
      <v-card> {{ this.items }} <br /> </v-card><br />
      <v-card> {{ this.res }} </v-card><br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: null,
      res: null,
      er: null,
      id: "",
      sec: "",
      url: "https://id.twitch.tv/oauth2/token?",
      gurl: "https://sabz.herokuapp.com/https://api.igdb.com/v4/games",
      data: {
        client_id: "mn2ibopr3oe4yal27t9gupc4xz7ucq",

        client_secret: "egn1px185b10muvw2433xhc3bacs9u",

        grant_type: "client_credentials",
        access_token: "dpvs4h9n7huzzky3roruhh8kmkhxzz"
      }
    };
  },
  mounted() {},
  methods: {
    ig: function() {
      axios
        .post(this.gurl, {
          Authorization: "Bearer " + `${this.data.access_token}`,
          "Client-ID": `${this.data.client_id}`,
          fields: "*"
        })
        .then(r => (this.items = r.data));
    },

    gt: function() {
      axios
        .post(
          this.url +
            `client_id=${this.data.client_id}&` +
            `client_secret=${this.data.client_secret}&` +
            `grant_type=${this.data.grant_type}`
        )
        .then(r => {
          this.res = r.data;
          console.log(r.data);
        })
        .catch(e => (this.er = e));
    }
  }
};
</script>

<style></style>
