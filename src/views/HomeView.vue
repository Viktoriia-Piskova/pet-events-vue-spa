<template>
  <div class="home">
    <h1>Login page</h1>
    <p>The beautifull home page with video and animation {{ dynamic }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: ["dynamic"],
};
</script>
