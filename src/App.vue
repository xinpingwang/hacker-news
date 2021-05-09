<template>
  <div id="app">
    <header class="header-bar">
      <router-link class="logo-text mr-12" :to="{ path: '/' }">
        <h1>Hacker News</h1>
      </router-link>
      <nav class="nav-wrapper">
        <router-link class="nav-item" :to="{ path: '/' }">Top</router-link>
        <router-link class="nav-item" :to="{ path: '/new' }">New</router-link>
      </nav>
    </header>
    <div class="content-wrapper" style="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
  };
</script>

<style lang="postcss" scoped>
  .header-bar {
    @apply flex items-center bg-black text-white h-14 pl-8;
  }

  .logo-text {
    @apply font-serif text-2xl text-gray-200;
  }

  .nav-wrapper {
    @apply h-full;
  }

  .nav-item {
    @apply inline-flex h-full items-center p-4 hover:bg-gray-800;
  }

  .nav-item.router-link-exact-active {
    @apply bg-gray-800;
  }

  .content-wrapper {
    @apply m-auto w-8/12 mt-16;
  }
</style>
