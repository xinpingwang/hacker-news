<template>
  <div>
    <div>{{commentDetail.by + ' ' + new Date(commentDetail.time * 1000).toLocaleString()}}</div>
    <div v-html="commentDetail.text"></div>
    <hr>
    <div style="margin-left: 26px">
      <comments-list :comments-ids="commentDetail.kids"/>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import CommentsList from "@/components/CommentsList.vue";

export default {
  name: "CommentsItem",
  components: { CommentsList },
  props: {
    commentsId: Number
  },
  data() {
    return {
      commentDetail: {
        by: "norvig",
        id: 2921983,
        kids: [],
        parent: 2921506,
        text:
          "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        time: 1314211127,
        type: "comment"
      }
    };
  },
  mounted() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
          this.commentsId +
          ".json"
      )
      .then(response => {
        this.commentDetail = response.data;
      });
  }
};
</script>

<style scoped>
</style>
