<template>
  <el-menu class="el-menu-vertical" router :default-active="$route.path">
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Analytics</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Create</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-document"></i>
      <span>Posts</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Users</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-setting"></i>
      <span>Logout</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
}
</style>
