<template>
  <div>
    <el-card class="card">
      <h2>Create new user</h2>
      <el-form
        :model="control"
        :rules="rules"
        ref="form"
        @submit.native.prevent="onSubmit"
      >
        <el-form-item label="Login" prop="login">
          <el-input v-model.trim="control.login"></el-input>
        </el-form-item>

        <div class="mb2">
          <el-form-item label="Password" prop="password">
            <el-input
              v-model.trim="control.password"
              type="password"
            ></el-input>
          </el-form-item>
        </div>

        <el-form-item>
          <el-button type="primary" native-type="submit" :loading="loading"
            >Create</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      loading: false,
      control: {
        login: "",
        password: ""
      },
      rules: {
        login: [{ required: true, message: "enter login", trigger: "blur" }],
        password: [
          { required: true, message: "enter password", trigger: "blur" },
          { min: 6, message: "minimum length password 6", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          try {
            const formData = {
              login: this.control.login,
              password: this.control.password
            };
            await this.$store.dispatch("auth/createUser", formData);
            this.$message.success("New user added");
            // this.$refs.form.reset();
            this.control.login = "";
            this.control.password = "";
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
.card {
  width: 500px;
}
</style>
