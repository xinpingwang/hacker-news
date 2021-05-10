<template>
  <div>
    <ul>
      <li v-for="news in currentNewsList" :key="news">
        <news-item :news-id="news" />
      </li>
    </ul>
    <div>
      <button :disabled="currentPage === 0" @click="previousPage">Previous</button>
      <button v-show="currentPage - 2 > 0" @click="gotoPage(currentPage - 2)">
        {{ currentPage - 2 }}
      </button>
      <button v-show="currentPage - 1 > 0" @click="gotoPage(currentPage - 1)">
        {{ currentPage - 1 }}
      </button>
      <span style="padding-left: 4px; padding-right: 4px">
        {{ currentPage }}
      </span>
      <button v-show="currentPage + 1 < totalPages" @click="gotoPage(currentPage + 1)">
        {{ currentPage + 1 }}
      </button>
      <button v-show="currentPage + 2 < totalPages" @click="gotoPage(currentPage + 2)">
        {{ currentPage + 2 }}
      </button>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
  const axios = require("axios");
  import NewsItem from "@/components/NewsItem.vue";

  export default {
    name: "NewNews",
    components: { NewsItem },
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
      previousPage: function () {
        this.currentPage--;
      },
      nextPage: function () {
        this.currentPage++;
      },
      gotoPage: function (target) {
        this.currentPage = target;
      },
    },
    mounted() {
      axios.get("https://hacker-news.firebaseio.com/v0/newstories.json").then((response) => {
        this.allNewsList = response.data;
      });
    },
  };
</script>

<style scoped></style>
