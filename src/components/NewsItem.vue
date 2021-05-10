<template>
  <div>
    <div>
      <a :href="newsDetail.url" target="_blank">{{ newsDetail.title }}</a>
    </div>
    <div>
      <span>by {{ newsDetail.by }}, at {{ new Date(newsDetail.time * 1000).toLocaleString() }}</span>
      <router-link :to="{ name: 'item', params: { id: newsDetail.id } }" v-if="newsDetail.kids">
        | {{ newsDetail.kids.length }} comments
      </router-link>
    </div>
  </div>
</template>

<script>
  const axios = require("axios");

  export default {
    name: "NewsItem",
    props: { newsId: Number },
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
          url: "",
        },
      };
    },
    mounted() {
      axios.get("https://hacker-news.firebaseio.com/v0/item/" + this.newsId + ".json").then((response) => {
        this.newsDetail = response.data;
      });
    },
  };
</script>

<style scoped></style>
