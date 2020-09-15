<template>
  <el-card class="comment">
    <div class="comment-header">
      <span class="name">Person name</span>
      <span>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </span>
    </div>
    <div class="comment-text">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["comment"]
};
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
  }
  &-text {
    white-space: pre-line;
  }
}
</style>
