<template>
  <div>
    <h3>Add comment</h3>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Your name" prop="name">
        <el-input v-model.trim="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="Text comment" prop="text">
        <el-input
          v-model.trim="ruleForm.text"
          type="textarea"
          :rows="3"
          resize="none"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading"
          >Create
          <i class="el-icon-edit"></i>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      ruleForm: {
        name: "",
        text: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          }
        ],
        text: [{ required: true, message: "Enter comment", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;

          const formData = {
            name: this.ruleForm.name,
            text: this.ruleForm.text,
            postId: ""
          };

          console.log(formData);

          try {
            setTimeout(() => {
              this.$message.success("Comment added");
              this.$emit("created");
            }, 2000);
          } catch (error) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
