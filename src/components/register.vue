<template>
  <div>
    <v-container style="max-width: 350px">
      <v-tabs centered grow v-model="tab">
        <v-tab>register </v-tab>
        <v-tab> login</v-tab>
      </v-tabs>
      <v-tabs-items style="max-width: 350px" v-model="tab">
        <v-tab-item>
          <signup></signup>
        </v-tab-item>
        <v-tab-item>
          <signin></signin>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import Signin from "./register/signin.vue";
import signup from "./register/signup.vue";
export default {
  components: { signup, Signin },

  data() {
    return {
      tab: "",
      valid: false,
      username: "",
      email: "",
      password: ""
    };
  }
};
</script>

<style></style>
