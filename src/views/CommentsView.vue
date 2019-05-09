<template>
  <div>
    <div>
      <div>
        <h2>{{newsDetail.title}}</h2>
      </div>
      <div>
        <span>by {{newsDetail.by}}, at {{new Date(newsDetail.time * 1000).toLocaleString()}}</span>
      </div>
    </div>
    <div style="margin-top: 26px">
      <comments-list :comments-ids="newsDetail.kids"/>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import CommentsList from "@/components/CommentsList.vue";

export default {
  name: "CommentsView",
  components: { CommentsList },
  data() {
    return {
      newsDetail: {
        by: "",
        descendants: 0,
        id: 0,
        kids: [],
        score: 0,
        time: 0,
        title: "",
        type: "",
        url: ""
      }
    };
  },
  mounted() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
          this.$route.params.id +
          ".json"
      )
      .then(response => {
        this.newsDetail = response.data;
      });
  }
};
</script>

<style scoped>
</style>
