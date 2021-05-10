<template>
  <div>
    <comments-item v-for="commentId in commentsIds" :key="commentId" :comments-id="commentId" />
  </div>
</template>

<script>
  import CommentsItem from "./CommentsItem.vue";

  export default {
    name: "CommentsList",
    components: { CommentsItem },
    props: { commentsIds: Array },
    mounted() {},
  };
</script>

<style scoped></style>
