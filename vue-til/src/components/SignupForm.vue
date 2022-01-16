<template>
  <form>
    <div>
      <label for="username"></label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password"></label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div>
      <label for="nickname"></label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button>login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },
};
</script>

<style></style>
