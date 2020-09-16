<template>
  <el-card class="card">
    <h2>Enter to admin panel</h2>
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
          <el-input v-model.trim="control.password" type="password"></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: "empty",
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
  mounted() {
    const { message } = this.$route.query;
    switch (message) {
      case "login":
        this.$message.info("Please login");
        break;

      case "logout":
        this.$message.info("You just logout");
        break;
    }
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

            await this.$store.dispatch("auth/login", formData);
            this.$router.push("/admin");
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
  width: 400px;
}
</style>
