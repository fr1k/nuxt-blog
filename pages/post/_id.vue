<template>
  <article class="post">
    <header class="post-header">
      <div class="post-header-title">
        <h2>Post title</h2>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-header-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-message"></i>
          32
        </small>
      </div>
      <div class="post-header-img">
        <img
          src="https://randomwordgenerator.com/img/picture-generator/53e0dd404856ab14f1dc8460962e33791c3ad6e04e507441722678d19549c4_640.jpg"
          alt="post img"
        />
      </div>
    </header>
    <main class="post-content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        nesciunt, beatae labore et reiciendis dolor quos asperiores fugiat id
        animi dolorem odio! Voluptas deleniti perferendis, dolorum in quo quod
        quia?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo, earum
        ut excepturi sapiente recusandae expedita, quibusdam aliquid beatae id,
        animi itaque eligendi vel sequi consequuntur! Corrupti dolorum ipsa cum!
      </p>
    </main>
    <footer>
      <CommentForm @created="createCommetHandler" v-if="isAddComment" />
      <div class="comments" v-if="true">
        <Comment v-for="comment in 4" :key="comment" :comment="comment" />
      </div>
      <div class="text-center" v-else>No comments</div>
    </footer>
  </article>
</template>

<script>
export default {
  validate({ params }) {
    return !!params.id;
  },
  data() {
    return {
      isAddComment: true
    };
  },
  methods: {
    createCommetHandler() {
      this.isAddComment = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
  &-header {
    margin-bottom: 1rem;
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    &-img img {
      width: 100%;
      height: auto;
    }
  }
  &-content {
    margin-bottom: 2rem;
  }
}
</style>
