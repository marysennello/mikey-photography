<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-row flex-wrap justify-center
  md:flex-nowrap md:flex-col md:justify-around md:h-screen 
  sticky top-0
  mx-5 md:mx-16 lg:mx-20
  ">
    <header>
      <h1 class="text-2xl py-2 md:py-0">mikey de pala</h1>
    </header>

    <nav class="basis-full md:basis-1/3">
      <ul class="flex flex-row md:flex-col md:flex-nowrap justify-around justify-items-center">
        <li>
          <NuxtLink to="/" class="text-center"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/gallery/bw" class="navlink"> Gallery </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="navlink"> Contact </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="navlink"> About </NuxtLink>
        </li>
      </ul>   
    </nav>
    <footer class="hidden md:block">
      <p class="text-sm">
        copyright 2023 mikey de pala
      </p>
    </footer>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  .router-link-exact-active {
    @apply text-cyan-700
  }
  li {
    @apply text-lg md:text-2xl px-2 py-1 md:py-3 w-full md:hover:text-zinc-50 md:hover:bg-zinc-800 text-center md:text-left
  }
</style>