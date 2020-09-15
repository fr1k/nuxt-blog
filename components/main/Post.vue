<template>
  <el-card class="post" shadow="hover" :body-style="{ padding: '0px' }">
    <header slot="header" class="post-header">
      <h3>Post Title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://i.imgur.com/sxm2DYp.jpg"
        alt="post img"
        class="post-img"
      />
    </div>
    <footer class="post-footer">
      <el-button @click="openPost">
        Open
      </el-button>
      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = "test-id";
      this.$router.push(`/post/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  min-height: 100px;
  margin-bottom: 1rem;
  padding: 0;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-img {
    width: 100%;
    height: auto;
  }
  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }
}
</style>
