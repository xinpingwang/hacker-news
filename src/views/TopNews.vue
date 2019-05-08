<template>
  <ul>
    <li v-for="news in currentNewsList" :key="news">
      <news-item :news-id="news"/>
    </li>
  </ul>
</template>

<script>
const axios = require("axios");
import NewsItem from "@/components/NewsItem.vue"

export default {
  name: "TopNews",
  components: {NewsItem},
  data() {
    return {
      allNewsList: [],
      currentPage: 0
    };
  },
  computed: {
    currentNewsList: function() {
      return this.allNewsList.length > 0
        ? this.allNewsList.slice(
            this.currentPage * 10,
            (this.currentPage + 1) * 10
          )
        : [];
    }
  },
  mounted() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => {
        this.allNewsList = response.data;
      });
  }
};
</script>

<style scoped>
</style>
