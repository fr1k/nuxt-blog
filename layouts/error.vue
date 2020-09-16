<template>
  <div class="error">
    <div class="error-content">
      <h1 class="error-content-title" v-if="error.statusCode === 404">
        Page not found
      </h1>
      <h1 class="error-content-title" v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-title {
      color: red;
      margin-bottom: 1rem;
    }
  }
}
</style>
