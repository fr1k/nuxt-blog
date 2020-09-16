<template>
  <div>
    <el-table :data="posts" style="width: 100%">
      <el-table-column prop="title" label="Title"> </el-table-column>
      <el-table-column label="Date" width="200">
        <template slot-scope="{ row: { date } }">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{
            new Date(date).toLocaleString()
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="views" label="Views">
        <template slot-scope="{ row: { views } }">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">
            {{ views }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="comments" label="Comments">
        <template slot-scope="{ row: { comments } }">
          <i class="el-icon-message"></i>
          <span style="margin-left: 10px">
            {{ comments.length }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="{ row }">
          <el-tooltip effect="dark" content="Open post" placement="top">
            <el-button
              icon="el-icon-edit"
              type="primary"
              circle
              @click="open(row._id)"
            ></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="Delete post" placement="top">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="remove(row._id)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  async asyncData({ store }) {
    const posts = await store.dispatch("post/fetchAdmin");
    return { posts };
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`);
    },
    async remove(id) {
      try {
        await this.$confirm("Delete post?", "", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        });
        await this.$store.dispatch("post/remove", id);
        this.posts = this.posts.filter(post => post._id !== id);
        console.log(this.posts);

        this.$message.success("Post deleted");
      } catch (err) {}
    }
  }
};
</script>

<style lang="scss" scoped></style>
