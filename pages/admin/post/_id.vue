<template>
  <div class="page-wrap">
    <el-breadcrumb class="mb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/admin/list">Posts</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="control"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Text in the format .md or .html" prop="text">
        <el-input
          v-model.trim="control.text"
          type="textarea"
          resize="none"
          rows="10"
        ></el-input>
      </el-form-item>
      <div class="mb">
        <small class="mr">
          <i class="el-icon-time"></i>
          <span>
            {{ new Date(post.date).toLocaleString() }}
          </span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span>
            {{ post.views }}
          </span>
        </small>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-edit"
          native-type="submit"
          :loading="loading"
          >Update</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Post | ${this.post.title}`
    };
  },
  layout: "admin",
  middleware: ["admin-auth"],
  validate({ params }) {
    return !!params.id;
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  },
  data() {
    return {
      loading: false,
      control: {
        text: ""
      },
      rules: {
        text: [{ required: true, message: "enter text", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            text: this.control.text,
            id: this.post._id
          };
          try {
            await this.$store.dispatch("post/update", formData);
            this.$message.success("Post updated");
            this.loading = false;
          } catch (error) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  max-width: 600px;
  .mr {
    margin-right: 2rem;
  }
}
</style>
