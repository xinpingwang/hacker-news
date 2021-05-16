<template>
  <div>
    <ul>
      <li v-for="news in currentNewsList" :key="news">
        <news-item :news-id="news" />
      </li>
    </ul>
    <pagination :currentPage="currentPage" @currentPageChange="gotoPage"></pagination>
  </div>
</template>

<script>
  const axios = require("axios");
  import NewsItem from "@/components/NewsItem.vue";
  import Pagination from "@/components/Pagination.vue";

  export default {
    name: "TopNews",
    components: { NewsItem, Pagination },
    data() {
      return {
        allNewsList: [],
        currentPage: 1,
        pageLimt: 10,
      };
    },
    computed: {
      totalPages: function () {
        return this.allNewsList.length / this.pageLimt;
      },
      currentNewsList: function () {
        return this.allNewsList.length > 0
          ? this.allNewsList.slice((this.currentPage - 1) * this.pageLimt, this.currentPage * this.pageLimt)
          : [];
      },
    },
    methods: {
      gotoPage: function (target) {
        this.currentPage = target;
      },
    },
    mounted() {
      axios.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((response) => {
        this.allNewsList = response.data;
      });
    },
  };
</script>

<style scoped></style>
