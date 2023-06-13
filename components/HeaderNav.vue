<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col justify-between h-screen py-5 sticky top-0">
    <header>
      <h1 class="text-2xl">mikey de pala</h1>
    </header>

    <nav>
      <ul class="flex flex-col justify-around">
        <li>
          <NuxtLink to="/" class="navlink"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/gallery" class="navlink"> Galleries </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="navlink"> Contact </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="navlink"> About </NuxtLink>
        </li>
      </ul>   
    </nav>
    <footer>
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
    @apply text-2xl px-2 py-3 w-full hover:text-zinc-50 hover:bg-zinc-800
  }
</style>