<template>
  <div class="admin-wrapper">
    <el-container class="container">
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin-wrapper {
  width: 100%;
  height: 100vh;
  .container {
    height: 100%;
  }
}
</style>
