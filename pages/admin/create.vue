<template>
	<div class="page-wrap">
		<h1 class="mb">Create new post</h1>
		<el-form
			:model="control"
			:rules="rules"
			ref="form"
			@submit.native.prevent="onSubmit"
		>
			<el-form-item label="Enter title of post" prop="title">
				<el-input v-model.trim="control.title"></el-input>
			</el-form-item>

			<el-form-item label="Text in the format .md or .html" prop="text">
				<el-input
					v-model="control.text"
					type="textarea"
					resize="none"
					rows="10"
				></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="success" plain @click="isPreviewDialog = true">
					Preview
				</el-button>
				<el-dialog title="Preview" :visible.sync="isPreviewDialog">
					<div :key="control.text">
						<vue-markdown>{{ control.text }}</vue-markdown>
						<!-- {{ control.text }} -->
					</div>
				</el-dialog>
			</el-form-item>

			<el-form-item>
				<el-upload
					ref="upload"
					drag
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-change="handleImageChange"
					:auto-upload="false"
				>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">
						Drop file here or <em>click to upload</em>
					</div>
					<div class="el-upload__tip" slot="tip">
						jpg/png files
					</div>
				</el-upload>
			</el-form-item>

			<el-form-item>
				<el-button
					type="primary"
					icon="el-icon-edit"
					native-type="submit"
					:loading="loading"
					>Create post</el-button
				>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	layout: "admin",
	middleware: ["admin-auth"],
	data() {
		return {
			image: null,
			loading: false,
			isPreviewDialog: false,
			control: {
				title: "",
				text: ""
			},
			rules: {
				title: [
					{ required: true, message: "enter title", trigger: "blur" }
				],
				text: [
					{ required: true, message: "enter text", trigger: "blur" }
				]
			}
		};
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(async valid => {
				if (valid && this.image) {
					this.loading = true;

					const formData = {
						title: this.control.title,
						text: this.control.text,
						image: this.image
					};

					try {
						await this.$store.dispatch("post/create", formData);
						this.control.title = "";
						this.control.text = "";
						this.image = null;
						this.$refs.upload.clearFiles();
						this.$message.success("Post was created");
						this.loading = false;
					} catch (error) {
						this.loading = false;
					}
				} else {
					this.$message.warning("Form is not valide");
				}
			});
		},
		handleImageChange(file, fileList) {
			this.image = file.raw;
		}
	}
};
</script>

<style lang="scss" scoped>
.page-wrap {
	max-width: 600px;
}
</style>
