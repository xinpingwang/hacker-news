<template>
  <div>
    <span
      class="page-item"
      :class="{ 'page-item-disabled': currentPage === 1 }"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
      >&lt;</span
    >
    <span
      v-for="page in 10"
      :key="page"
      class="page-item"
      :class="{ 'page-item-active': currentPage === pageBase + page }"
      @click="changePage(pageBase + page)"
    >
      {{ pageBase + page }}
    </span>
    <span class="page-item" @click="changePage(currentPage + 1)">&gt;</span>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      currentPage: {
        type: Number,
        default: 1,
      },
    },
    computed: {
      pageBase() {
        if (this.currentPage % 10 === 0) {
          return this.currentPage - 10;
        }
        return Math.floor(this.currentPage / 10) * 10;
      },
    },
    methods: {
      changePage(page) {
        if (page < 1) {
          page = 1;
        }
        this.$emit("currentPageChange", page);
      },
    },
  };
</script>

<style lang="postcss" scoped>
  .page-item {
    @apply ml-2 mr-2 cursor-pointer;
  }

  .page-item-active {
    @apply text-black font-bold;
  }

  .page-item-disabled {
    @apply text-gray-300 cursor-not-allowed;
  }
</style>
